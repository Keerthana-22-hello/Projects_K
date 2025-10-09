from flask import Flask, render_template, request, redirect, session
import sqlite3

#creating database to store the students details
def EvoTechDatabase():
    mydb = sqlite3.connect("Student.db")
    cur = mydb.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS ts (
            Current_Profession TEXT,
            Field_of_Interest TEXT,
            Skill_Level TEXT,
            Learning_method TEXT,
            Linked_in TEXT
        )
    """)
    mydb.commit()
    mydb.close()

# creating database for EvoEarth signup page
def EvoEarthDatabase():
    mydb=sqlite3.connect('Earth.db')
    c=mydb.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS te
        (
            name TEXT,
            email TEXT UNIQUE,
            password TEXT,
            phone INTEGER,
            age INTEGER,
            gender TEXT,
            country TEXT,
            profile BLOB,
            interest TEXT
        )
    ''')
    mydb.commit()
    mydb.close()
