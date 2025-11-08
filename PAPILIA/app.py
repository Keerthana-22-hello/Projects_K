from flask import Flask, render_template, request, session, redirect, url_for
import speech_recognition as sr
import pyttsx3
import datetime
import webbrowser
import random
import threading
import queue

app = Flask(__name__, template_folder="templates")
app.secret_key = "secret-key-for-session"

# -------------------------
# Setup Speech + TTS
# -------------------------
recognizer = sr.Recognizer()


tts_lock = threading.Lock()
import queue

# Global queue for speech requests
tts_queue = queue.Queue()

def tts_worker():
    local_engine = pyttsx3.init()
    local_engine.setProperty('rate', 150)
    voices = local_engine.getProperty('voices')
    if len(voices) > 1:
        local_engine.setProperty('voice', voices[1].id)

    while True:
        text = tts_queue.get()   # Wait for new text
        if text is None:         # None is shutdown signal
            break
        local_engine.say(text)
        local_engine.runAndWait()

# Start worker thread once
threading.Thread(target=tts_worker, daemon=True).start()

def speak(text):
    tts_queue.put(text)  # Add to the queue instead of running directly



# -------------------------
# Helper functions
# -------------------------
def listen(timeout=5, phrase_time_limit=5):
    try:
        with sr.Microphone() as source:
            print("Listening...")
            audio = recognizer.listen(source, timeout=timeout, phrase_time_limit=phrase_time_limit)
            return recognizer.recognize_google(audio)
    except sr.UnknownValueError:
        speak("Sorry, I didn’t understand that.")
        return ""
    except sr.RequestError:
        speak("Speech service unavailable.")
        return ""
    except Exception as e:
        print("Microphone error:", e)
        speak("I couldn’t access the microphone.")
        return ""


def tell_joke():
    jokes = [
        "Why don’t programmers like nature? It has too many bugs.",
        "I told my computer I needed a break... and it said 'No problem, I’ll crash for you!'",
        "Why did the Python developer go broke? Because he couldn’t C#!"
    ]
    return random.choice(jokes)

def comfort_user():
    messages = [
        "I’m here for you. Take a deep breath, you’ve done so much already 💜",
        "Even butterflies need to rest their wings. You deserve a break 🦋",
        "Let me tell you a joke to lift your mood."
    ]
    return random.choice(messages)

def handle_command(command):
    """Interpret the command and return a response dict."""
    if not command.strip():
        speak("I didn’t hear anything. Please say again.")
        return {"message": "I didn’t hear anything."}

    cmd = command.lower()

    if "search" in cmd:
        query = cmd.replace("search", "").strip()
        if not query:
            speak("Please tell me what to search.")
            return {"message": "Please tell me what to search."}
        url = f"https://www.google.com/search?q={query}"
        webbrowser.open(url)  # Open automatically
        speak(f"Here’s what I found for {query}")
        return {"message": f"Here’s what I found for {query}", "url": url}

    elif "time" in cmd:
        now = datetime.datetime.now().strftime("%H:%M")
        speak(f"The current time is {now}")
        return {"message": f"The current time is {now}"}

    elif "open google" in cmd:
        url = "https://www.google.com"
        webbrowser.open(url)
        speak("Opening Google.")
        return {"message": "Opening Google", "url": url}

    elif "joke" in cmd:
        joke = tell_joke()
        speak(joke)
        return {"message": joke}

    elif any(x in cmd for x in ["tired", "exhausted", "low"]):
        msg = comfort_user()
        speak(msg)
        return {"message": msg}

    elif any(x in cmd for x in ["exit", "bye"]):
        speak("Goodbye! Have a great day!")
        return {"message": "Goodbye! Have a great day!"}

    elif any(x in cmd for x in ["hello", "hi", "hey"]):
        speak("Hello! How can I help you?")
        return {"message": "Hello! How can I help you?"}

    else:
        speak(f"You said: {command}")
        return {"message": f"You said: {command}"}

# -------------------------
# Flask routes
# -------------------------
@app.route("/", methods=["GET", "POST"])
def index():
    if "chat_history" not in session:
        session["chat_history"] = []

    if request.method == "POST":
        user_input = request.form.get("user_input", "").strip()
        result = handle_command(user_input)
        response = result.get("message", "I didn’t get that.")
        url = result.get("url")

        # Add to chat history
        session["chat_history"].append({"user": user_input, "bot": response, "url": url})
        session.modified = True

        return redirect(url_for("index"))  # Refresh to show updated history

    return render_template("index.html", chat_history=session["chat_history"])

@app.route("/listen", methods=["POST"])
def listen_route():
    if "chat_history" not in session:
        session["chat_history"] = []

    text = listen(timeout=5, phrase_time_limit=5)
    result = handle_command(text)
    response = result.get("message", "I didn’t get that.")
    url = result.get("url")

    session["chat_history"].append({"user": text, "bot": response, "url": url})
    session.modified = True

    return redirect(url_for("index"))

@app.route("/clear", methods=["POST"])
def clear_chat():
    session["chat_history"] = []
    session.modified = True
    speak("Chat history cleared.")
    return redirect(url_for("index"))
# -------------------------
# Run app
# -------------------------
if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=False)
