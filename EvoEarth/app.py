from flask import Flask, render_template, request, redirect, session
import sqlite3
import random
import route,db,form
from form import form_routes
from route import routes
from db import EvoTechDatabase, EvoEarthDatabase


#creating flask app
app = Flask(__name__)
UPLOAD_FOLDER='static/uploads'
app.config['UPLOAD_FOLDER']=UPLOAD_FOLDER   
app.secret_key='HelloWorld!'

app.register_blueprint(form_routes)
app.register_blueprint(routes)
# creating backend for viewing student details (admin page table) 
@app.route('/students')
def view_students():
    mydb = sqlite3.connect('Student.db')
    c = mydb.cursor()
    c.execute("SELECT * FROM ts")
    students = c.fetchall()
    mydb.close()
    return render_template('students.html', students=students)

if __name__ == '__main__':
    EvoTechDatabase()
    EvoEarthDatabase()
    app.run(debug=True)

'''
@app.route('/get_image/<int:id>')
def get_image(id):
    mydb=sqlite3.connect('Earth.db')
    c=mydb.cursor()
    c.execute("Select profile from te where id=?",(id,))
    result=c.fetchone()
    mydb.close()
    if result:
        return result[0], 200, {'Content-Type' : 'image/jpeg'}
    else:
        return "Image not found", 404
@app.route('/profile/<int:id>')
def profile(id):
    mydb=sqlite3.connect('Earth.db')
    c=mydb.cursor()
    c.execute('select name, email, country from te where id=?',(id))
    user=c.fetchone()
    mydb.close()
    if user:
        return render_template("earthSignUp.html")
    else:
        return "User not found"
'''







