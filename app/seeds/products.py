from app.models import db, Product

def seed_products():
    product1 = Product(
    seller_id=1,
    title="Handmade Initial Name Necklace- Nameplate Necklace- Sideways Initial Necklace-Spaced Letter Necklace-Choker Letter Necklace-Mothers Day Gift",
    media_url='https://i.etsystatic.com/24389307/r/il/14b6d0/2549873173/il_1140xN.2549873173_51zo.jpg',
    price=23.09,
    description=
    "14K Gold-Plated necklace is made by bonding a solid layer of 14K gold on top of another silver, but this layer is 1000 - 10,000 times thicker than gold plating, resulting in a durable, long-lasting product that looks gorgeous like solid gold.Make your loved ones happy with Gold-Plated Necklace ♥",
    quantity_available =40
    )
    product2 = Product(
    seller_id=2,
    title="Family Necklace • Linked Circle Necklace • Custom Children Name Rings • Eternity Necklace • Mother Gift ",
    media_url="https://i.etsystatic.com/10204022/r/il/fb2b79/1130332425/il_1140xN.1130332425_rvw1.jpg",
    price=31.50,
    description=
    " 1♥ Custom Family Eternity Necklace ♥ The most unique jewelry you can find, perfect gift for you and your loved one ♥ ∙ It's dainty and can be worn every day • A special piece you'll treasure • High quality materials and attention to detail",
    quantity_available =54
   
    )
    product3 = Product(
    seller_id=3,
    title="Boho Wedding Hair Accessory Bridal Hair Vine with Leaves Pearls Crystals",
    media_url="https://i.etsystatic.com/20200241/r/il/9f2975/1995128613/il_1140xN.1995128613_k0se.jpg",
    price=14.00,
    description=
    "Boho wedding hair vine is a perfect touch of sparkle. Metal leaves with clear crystals set on a bendable wire with rhinestones and acrylic pearls. Boho, beach, woodland or vintage style - this is a perfect touch for your special occasion, wedding, grad or for bridesmaids. Can be worn with many bridal hair styles - hair down, half-up, up-do.",
    quantity_available =34
    )
    product4 = Product(
    seller_id=4,
    title="Big Letter Necklace • Sideways Initial Necklace • Monogram Necklace • Bridesmaid Gifts",
    media_url="https://i.etsystatic.com/10204022/r/il/18e97e/2550873428/il_1140xN.2550873428_rvbc.jpg",
    price=23.62,
    description=
    "S I D E W A Y S ∙ I N I T I A L ∙ N E C K L A C E • Material: High Quality Solid 925 Sterling Silver• Featuring 1.75 Letter Charm • Finish: Sterling Silver ∙ 18K Gold ∙ Rose Gold• All our jewelry is custom made by hand with Love and Care in our workshop ♡ ",
    quantity_available =10
    )

    db.session.add(product1)
    db.session.add(product2)
    db.session.add(product3)
    db.session.add(product4)

    db.session.commit()


def undo_products():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()