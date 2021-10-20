from .db import db
from app.models.cart import cart_products

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    seller_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(1000), nullable=False)

    # relationships
    # one to many
    seller = db.relationship("User", back_populates="products")

    # many to many
    carts = db.relationship(
        "Cart",
        secondary=cart_products,
        back_populates="products"
    )

def to_dict(self):
    return {
        'id':self.id,
        'seller_id': self.user_id,
        'title': self.title,
        'price': self.price,
        'description': self.description
        
    }
    