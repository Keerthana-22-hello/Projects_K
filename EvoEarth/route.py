from flask import Flask, render_template, request, redirect, session, Blueprint
import sqlite3

#creating a blueprint for the the route page which helps us to import the route.py into app.py
routes=Blueprint('routes', __name__)

# creating access root of the page
@routes.route('/')
def index():
    return render_template('index.html')

# access to EvoSci
@routes.route('/evoSci')
def EvoSci():
    return render_template('evoSci.html')
# access to evo man
@routes.route('/evo_man')
def EvoMan():
    return render_template('evo_man.html')

#creating app route from evoearth to evotech
@routes.route('/evo_tech')
def EvoTech():
    return render_template('evo_tech.html')

@routes.route('/evoMoney')
def EvoMoney():
    return render_template('evoMoney.html')


# creating about page access
@routes.route('/about')
def about():
    return render_template('about.html')

#creating login page access
@routes.route('/login')
def login():
    return render_template('login.html')

# creating backend of sign page
@routes.route("/sign_up")
def submit_form():
    return render_template("sign_up.html") 

# creating admin page like changing student details using id number and deleting the student details
@routes.route("/update-form")
def update_form():
    return render_template("update.html")

#creating route and backend for earthsignup page
@routes.route('/earthSignUp')
def EvoEarthSignUp():
    return render_template('earthSignUp.html')

@routes.route('/evoGovern')
def EvoGovern():
    return render_template('evoGovern.html')