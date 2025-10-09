import sqlite3

def print_all_students():
    # Connect to the database
    mydb = sqlite3.connect('Student.db')
    cursor = mydb.cursor()

    # Fetch all rows from the table `t`
    cursor.execute("SELECT * FROM ts")
    rows = cursor.fetchall()

    # Print each row nicely
    print("All Student Records:\n")
    for row in rows:
        user_id, password, name, age, skillset = row
        print(f"User ID: {user_id}")
        print(f"Password : {password}")
        print(f"Name   : {name}")
        print(f"Age    : {age}")
        print(f"Skills : {skillset}")
        print("-" * 30)

    # Close the connection
    mydb.close()

print_all_students()