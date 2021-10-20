from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo',
        last_name='lition',      
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        first_name='marnie',
        last_name='lition',
        username='marnie', email='marnie@aa.io', password='password')
    mary = User(
        first_name='mary',
        last_name='lition',
        username='mary', email='mary@aa.io', password='password')
    joanne = User(
        first_name='Joanne',
        last_name='lition',
        username='joanne', email='joanne@aa.io', password='password'
    )
    hannah = User(
        first_name='Hannah',
        last_name='lition',
        username='hannah', email='hannah@aa.io', password='password'
    )
    jasmine = User(
        first_name='Jasmine',
        last_name='lition',
        username='jasmine', email='jasmine@aa.io', password='password'
    )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(mary)
    db.session.add(joanne)
    db.session.add(hannah)
    db.session.add(jasmine)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
