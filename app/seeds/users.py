from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo',
        last_name='lition',      
        username='Demo8475', email='demo@aa.io', password='password')
    marnie = User(
        first_name='Marnie',
        last_name='Lee',
        username='Marnie3424', email='marnie@aa.io', password='password')
    mary = User(
        first_name='Mary',
        last_name='Williams',
        username='Mary0247', email='mary@aa.io', password='password')
    joanne = User(
        first_name='Joanne',
        last_name='Taylor',
        username='Joanne3829', email='joanne@aa.io', password='password'
    )
    hannah = User(
        first_name='Hannah',
        last_name='Campbell',
        username='Hannah8294', email='hannah@aa.io', password='password'
    )
    jasmine = User(
        first_name='Jasmine',
        last_name='Cassidy',
        username='Jasmine2947', email='jasmine@aa.io', password='password'
    )
    chrissy = User(
        first_name='Chrissy',
        last_name='Chan',
        username='Chrissy2095', email='chrissy@aa.io', password='password'
    )
    ann = User(
        first_name='Ann',
        last_name='Halls',
        username='Ann8392', email='ann@aa.io', password='password'
    )
    
    

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(mary)
    db.session.add(joanne)
    db.session.add(hannah)
    db.session.add(jasmine)
    db.session.add(chrissy)
    db.session.add(ann)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
