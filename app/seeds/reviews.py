from app.models import db, Review

def seed_reviews():
    review1 = Review(
        user_id=1,
        product_id=1,
        content="gorgeous necklace, my daughter loved it!",
        rating="5"
    )

    
    
    db.session.add(review1)

    db.session.commit()
    
def undo_reviews():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
