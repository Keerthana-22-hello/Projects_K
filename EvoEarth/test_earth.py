import sqlite3
import os

# Connect to the database
conn = sqlite3.connect('Earth.db')
cursor = conn.cursor()

# Fetch all users
cursor.execute("SELECT name, email, password, phone, age, gender, country, profile, interest FROM te")
rows = cursor.fetchall()

if not rows:
    print("No students found in the database.")
else:
    for i, user in enumerate(rows, start=1):
        print(f"\n{'='*20} Student {i} {'='*20}")
        print(f"Name     : {user[0]}")
        print(f"Email    : {user[1]}")
        print(f"Password : {user[2]}")
        print(f"Phone    : {user[3]}")
        print(f"Age      : {user[4]}")
        print(f"Gender   : {user[5]}")
        print(f"Country  : {user[6]}")
        print(f"Interest : {user[8]}")

        # Save image as file
        if user[7]:
            image_filename = f"profile_{user[1].replace('@', '_at_')}.jpg"
            with open(image_filename, 'wb') as f:
                f.write(user[7])
            print(f"Profile image saved as: {image_filename}")

            # Auto-open (optional, OS-specific)
            try:
                os.system(f'xdg-open "{image_filename}"')  # Linux
                # os.system(f'start {image_filename}')     # Windows
                # os.system(f'open "{image_filename}"')     # macOS
            except:
                print("Couldn't open image automatically.")
        else:
            print("No profile image found.")

# Close DB connection
conn.close()
