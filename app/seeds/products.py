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
    product5 = Product(
    seller_id=2,
    title="Wooden Christmas Advent Calendar with LED Light Up and 24 Drawers",
    media_url="https://i.etsystatic.com/31584040/r/il/0a8c14/3405978176/il_794xN.3405978176_avu5.jpg",
    price=93.62,
    description=
    "There is no better way to count down the days until Christmas than with a beautifully decorated and carved wood Christmas advent calendar. This calendar, featuring elegant carvings and 24 numbered little treasure boxes, that are the perfect way to allow children to engage in the excitement of a holiday countdown. Store candy, toys, money and more in each box and watch the surprise on their faces each morning. Put 2 AA batteries (not included) and see the beautiful Christmas scene light up.-Wooden Decorative Calendar: This Christmas countdown features 24 drawers that are marked with numbers consecutively to help count down the days until Christmas.Christmas Decorations: A fine wood finish compliments the silhouettes of Santa Claus, reindeers, and a beautiful carving of a Christmas scene; the Christmas village features wooden houses, pine trees, a street lamp, a dog, a bench, and a person in festive clothing",
    quantity_available =60
    )
    product6 = Product(
    seller_id=3,
    title="Dogs Books & Coffee, Soft Comfy Unisex Shirt, Dogs, Books, Coffee, TShirt, Printed by Hand",
    media_url="https://i.etsystatic.com/11382980/r/il/cd28e1/1753507771/il_794xN.1753507771_i1bu.jpg",
    price=12.99,
    description=
    "Dogs Books & Coffee, Soft Comfy Unisex Shirt, Dogs, Books, Coffee, TShirt, Printed by Hand.Printed on Soft & Comfy Unisex Tee,Heather Grey Tee Shown In Pic,Sleeves Rolled & Knot at Bottom For Pic",
    quantity_available =14
    )
    product7 = Product(
    seller_id=4,
    title="Custom Pet Pillow | Personalized Pillow | Pet Memorial Gift | Custom shaped pillow | Dog Pillow | Cat Pillow | Pet Lover Gift",
    media_url="https://i.etsystatic.com/25155098/r/il/d9b06c/3200142765/il_794xN.3200142765_l3s7.jpg",
    price=22.99,
    description=
    "Turn your pet into a custom shaped pillow that we hand make! This is the perfect gift for pet lovers. Just upload a photo of your pet to create endless possibilities! We use the highest industrial quality materials and inks. Super soft, and machine washable!",
    quantity_available =14
    )
    product8 = Product(
    seller_id=1,
    title="Custom Miniature Hand Cut Map ORIGINAL Artwork. 4x4.",
    media_url="https://i.etsystatic.com/5582122/r/il/781906/3207830433/il_794xN.3207830433_e8e0.jpg",
    price=60.00,
    description=
    "Custom Miniature Hand Cut Map Originals are now available by the artist, Karen M. O'Leary.A great way to own an ORIGINAL at a miniature price.",
    quantity_available =5
    )
    product9 = Product(
    seller_id=1,
    title="Matching Hat Set, Mother Daughter Knitted Hats, Mom and Me Pom Hats, Knit Hat Set Gift",
    media_url="https://i.etsystatic.com/7439447/r/il/755e4a/2110550924/il_794xN.2110550924_8wro.jpg",
    price=56.00,
    description=
    "Matching Hat Set, Mother Daughter Knitted Hats, Mom and Me Pom Hats, Knit Hat Set Gift.A PeonyKnits™ original design - Peony Knits ultrasuade label attached for authenticity - Made from a soft acrylic/wool blend yarn - Choose your color (pictured in Fisherman) - If you would like the label left off please leave a comment in the notes to seller section.",
    quantity_available =12
    )
    product10 = Product(
    seller_id=1,
    title="Lamb's Ear Wreath, Farmhouse Wreath, Year Round Wreath, Front Door Wreath, Wedding Wreath, Spring Decor, Winter Wreath, Christmas Wreath",
    media_url="https://i.etsystatic.com/25516789/r/il/da889f/2760786398/il_794xN.2760786398_1nnt.jpg",
    price=56.00,
    description=
    "Welcome friends and family into your home all year round with this farmhouse Inspired wreath!This lamb’s ear wreath is made of high quality faux lamb’s ear on a grapevine wreath base. Wreaths are measured from leaf tip to leaf tip once florals are on and finished.This wreath would look great on your front door, window, bed, etc. The possibilities are endless.Wreaths also make great gifts for Christmas, birthdays, weddings, and housewarming.",
    quantity_available =15
    )
    product11 = Product(
    seller_id=3,
    title="Name Puzzle with Animals - Woodland Nursery - Baby Boy Gift - 3rd Birthday - Educational Toy - Toddler Toys",
    media_url="https://i.etsystatic.com/22537583/r/il/20f9fc/3277015502/il_794xN.3277015502_edq4.jpg",
    price=5.50,
    description=
    "The most unique wooden toys for little ones. 🦊-Looking for baby gifts or amazing nursery decor? Here it is! Name puzzle is such a meaningful and personalized wooden toy. It helps develop motor skills of your baby and serves as a wonderful decoration! Check out the store for more designs and message us for custom ones.It is great gift idea for 1st Birthday (and 2nd, and 3rd), Christmas, Thanksgiving, Baby Shower and no occasion at all for baby girl, baby boy, toddlers and kids.",
    quantity_available =14
    )
    product12 = Product(
    seller_id=3,
    title="Pumpkin 1st Birthday Outfit Girl, First Birthday Outfit , Pumpkin One, Fall First Birthday, 1st Birthday Girl Dress ( PBD)",
    media_url="https://i.etsystatic.com/11577357/r/il/95898a/3355929181/il_794xN.3355929181_aou7.jpg",
    price=5.50,
    description=
    "Pumpkin 1st Birthday Outfit Girl, Pumpkin Birthday Outfit, First Birthday Outfit , Pumpkin One, Fall First Birthday, 1st Birthday Girl Dress.Tutu is available in 3 colors: pink, orange, and burgundy (please mention in the notes section which color you would like) Modern Design !!! Personalized with the name of your little pumpkin !! Get this sparkling outfit made in glittering gold and orange !!",
    quantity_available =10
    )

    db.session.add(product1)
    db.session.add(product2)
    db.session.add(product3)
    db.session.add(product4)
    db.session.add(product5)
    db.session.add(product6)
    db.session.add(product7)
    db.session.add(product8)
    db.session.add(product9)
    db.session.add(product10)
    db.session.add(product11)
    db.session.add(product12)

    db.session.commit()


def undo_products():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()