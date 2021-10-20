from app.models import db, Product

def seed_products():
    product1 = Product(
    seller_id=1,
    title="Handmade Initial Name Necklace- Nameplate Necklace- Sideways Initial Necklace-Spaced Letter Necklace-Choker Letter Necklace-Mothers Day Gift",
    price="23.09",
    description=
    "14K Gold-Plated necklace is made by bonding a solid layer of 14K gold on top of another silver, but this layer is 1000 - 10,000 times thicker than gold plating, resulting in a durable, long-lasting product that looks gorgeous like solid gold.         Make your loved ones happy with Gold-Plated Necklace ♥"
    )
    product2 = Product(
    seller_id=2,
    title="Family Necklace • Linked Circle Necklace • Custom Children Name Rings • Eternity Necklace • Mother Gift ",
    price="31.50",
    description=
    " 1♥ Custom Family Eternity Necklace ♥ The most unique jewelry you can find, perfect gift for you and your loved one ♥ "
    # W H Y ∙ Y O U ' L L ∙ L O V E ∙ I T

    # • It's dainty and can be worn every day

    # • A special piece you'll treasure

    # • High quality materials and attention to detail


    # E T E R N I T Y ∙ N E C K L A C E

    # • Material: High Quality Solid 925 Sterling Silver

    # • Dimension: 13mm Outer Diameter

    # • Finish: Sterling Silver ∙ 18K Gold ∙ Rose Gold

    # • Personalized: This design can be customized with your Roman Numerals, Messages, Coordinates or Names.

    # • All our work is custom made by hand with Love and Care in our workshop ♥"
    )
    product3 = Product(
    seller_id=3,
    title="Boho Wedding Hair Accessory Bridal Hair Vine with Leaves Pearls Crystals",
    price="14.00",
    description=
    "Boho wedding hair vine is a perfect touch of sparkle. Metal leaves with clear crystals set on a bendable wire with rhinestones and acrylic pearls. Boho, beach, woodland or vintage style - this is a perfect touch for your special occasion, wedding, grad or for bridesmaids. Can be worn with many bridal hair styles - hair down, half-up, up-do."
    )

    db.session.add(product1)
    db.session.add(product2)
    db.session.add(product3)

    db.session.commit()


def undo_products():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()