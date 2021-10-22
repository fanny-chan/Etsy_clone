from app.models import db, Review

def seed_reviews():
    review1 = Review(
        user_id=1,
        product_id=1,
        rating=5,
        content="gorgeous necklace, my daughter loved it!",
    )
    review2 = Review(
        user_id=6,
        product_id=1,
        rating=5,
        content="I'm so so happy with this! The rose gold color I picked is gorgeous, the chain is a really cute style, and there's a great added detail on the clasp. Can't say enough good things about this necklace."
    )
    review3 = Review(
        user_id=1,
        product_id=4,
        rating=4.5,
        content="Absolutely lovely! Nice quality. I’m so happy I ordered this. AND … it is the perfect necklace for layering."
    )
    review4 = Review(
        user_id=2,
        product_id=4,
        rating=4,
        content="I must start & let you know their customer service is stellar! Before purchasing I had a question & I received a helpful response in a timely manner. Once my ordered was shipped I had a an issue with delivery because of USPS & I reached out & Kate was quick to help which made feel at ease. I absolutely LOVE the necklace, the thoughtful packaging & the quality of the necklace.Needless to say I loved it so much that I’ll be ordering this necklace for myself."
    )

    
    
    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)

    db.session.commit()
    
def undo_reviews():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
