from flask import Flask, render_template, request, redirect, session, Blueprint
import sqlite3, random

form_routes=Blueprint('form_routes', __name__)


#creating login page form's backend
@form_routes.route('/login',methods=['POST'])
def user_login():
    name=request.form.get('username')
    password=request.form.get('password')

    mydb=sqlite3.connect('Student.db')
    c=mydb.cursor()
    c.execute("Select * from ts where name = ? and password = ?",(name,password))
    user=c.fetchone()
    mydb.close()
    if user:
        session['username'] = name
        return redirect('/students')
    else:
        return 'Invalid username or password' 

# backend of the form in the evotech page sign up
@form_routes.route('/submit', methods=['POST'])
def submit():  
    name = request.form.get('name')
    password=request.form.get('password')
    age = request.form.get('age')
    skills = ' | '.join(request.form.getlist('skills'))
    user_id = id_generator()
    mydb = sqlite3.connect('Student.db')
    cur = mydb.cursor()
    cur.execute("INSERT INTO ts (user_id,password, name, age, skills) VALUES (?, ?, ?, ?, ?)", (user_id, password, name, age, skills))
    mydb.commit()
    mydb.close()
    return render_template('success.html')

# creating backend for the EvoEarth sign up page
@form_routes.route('/submitEarth',methods=['POST'])
def get_details():
    image_data=None
    name=request.form.get('name')
    email=request.form.get('email')
    password=request.form.get('password')
    phone=request.form.get('phone')
    age=request.form.get('age')
    gender=request.form.get('gender')
    country=request.form.get('country')
    profile=request.files['photo']
    interest = ' | '.join(request.form.getlist('Field_of_Interest'))
    image_blob=profile.read()

    mydb=sqlite3.connect('Earth.db')
    c=mydb.cursor()
    c.execute("select email from te where email = ? ", (email,))
    existing_user=c.fetchone()
    if existing_user:
        return "Email already exists."
    c.execute("Insert into te (name,email,password,phone,age,gender,country,profile,interest) values (?,?,?,?,?,?,?,?,?)",(name,email,password,phone,age,gender,country,image_blob,interest))
    mydb.commit()
    mydb.close()

    return render_template('success.html')

# creating a random id generator
def id_generator():
    mydb = sqlite3.connect('Student.db')
    c = mydb.cursor()
    while True:
        new_id = random.randint(10000, 99999)
        c.execute('SELECT * FROM ts WHERE user_id = ?', (new_id,))
        existing = c.fetchone()
        if existing is None:
            mydb.close()
            return new_id

#creating backend for admin page of evotech
@form_routes.route('/update', methods=['POST'])
def update_student():
    ID=request.form['ID']
    newName=request.form['newName']
    newAge=request.form['newAge']
    newSkills = ' | '.join(request.form.getlist('newSkills'))
    
    mydb=sqlite3.connect('Student.db')
    c=mydb.cursor()
    if newName:
        c.execute("update ts set name = ? where user_id =?",(newName,ID))
    if newAge:
        c.execute("update ts set age = ? where user_id = ?",(newAge,ID))
    if newSkills:
        c.execute("update ts set skills = ? where user_id = ?",(newSkills,ID))

    mydb.commit()
    mydb.close()
    return render_template('success.html')

# delete student evotech
@form_routes.route('/delete',methods=['POST'])
def delete_student():
    student_id = request.form['Id']

    #delete
    mydb=sqlite3.connect("Student.db")
    c=mydb.cursor()
    c.execute("Delete from ts where user_id = ?",(student_id,))
    mydb.commit()
    mydb.close()
    return "Deleted successfuly..."