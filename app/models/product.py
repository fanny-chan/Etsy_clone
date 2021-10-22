from .db import db
<<<<<<< Updated upstream
=======
# from app.models.cart import cart_products
from datetime import datetime
>>>>>>> Stashed changes

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    seller_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    quantity_available = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime(), default=datetime.utcnow)
    updated_at = db.Column(db.DateTime(), default=datetime.utcnow)

# relationships
seller = db.relationship("User", back_populates="products")

<<<<<<< Updated upstream
=======
    # many to many carts -- products
    # carts = db.relationship(
    #     "Cart",
    #     secondary=cart_products,
    #     back_populates="products"
    # )

    # one to many product-- reviews
    reviews = db.relationship("Review", back_populates="product")
>>>>>>> Stashed changes

def to_dict(self):
    return {
        'id':self.id,
        'seller_id': self.user_id,
        'title': self.title,
        'price': self.price,
        'description': self.description,
        'quantity_available': self.quantity_available
        
    }
    