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
    review5 = Review(
        user_id=2,
        product_id=12,
        rating=4,
        content="Loved this onesie! It was perfect for my daughter's 1 year photoshoot!"
    )
    review6 = Review(
        user_id=4,
        product_id=12,
        rating=5,
        content="Amazing. I ordered this on a Tuesday and got it by Friday for her Saturday birthday party. I was so happy. It was such a hit, literally everyone loved it. Not the best photo, also it was a bit cool here so she is in full tights. But the little leg warmers it came with were the cutest. Highly recommend this shop!!! Thanks again."
    )
    review7 = Review(
        user_id=6,
        product_id=12,
        rating=5,
        content="Seller was responsive and shipped the outfit quickly. My daughter looked so cute for her first birthday! I chose the pumpkin onesie with the pink tutu. Somehow my daughter kept the bow on the entire time so it just have been comfortable."
    )
    review8 = Review(
        user_id=7,
        product_id=12,
        rating=5,
        content="This was darling, my little one wouldn't pose for a picture so it was hard to show how cute his was on her. Came so quickly, loved it..."
    )
    review9 = Review(
        user_id=4,
        product_id=1,
        rating=5,
        content="It's prettier than I expected. I wanted it engraved with an unusual phrase, rather than just a name, and it came just as I wanted. I follow this shop on Facebook now and I get all kinds of ads with the pretty new jewelry that's in stock. I love this shop."
    )
    review10 = Review(
        user_id=3,
        product_id=1,
        rating=5,
        content="I find the quality as expected and I really like the way it hangs - very artsy looking to me! But, I would like to have it in real gold."
    )


    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.add(review9)
    db.session.add(review10)

    db.session.commit()
    
def undo_reviews():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
