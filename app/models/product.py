from .db import db
# from app.models.cart import cart_products
from datetime import datetime


class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    seller_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String(500), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    quantity_available = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime(), default=datetime.utcnow)
    updated_at = db.Column(db.DateTime(), default=datetime.utcnow)

    # relationships
    # one to many
    user = db.relationship("User", back_populates="products")

    # many to many carts -- products
    # carts = db.relationship(
    #     "Cart",
    #     secondary=cart_products,
    #     back_populates="products"
    # )

    # one to many product-- reviews
    reviews = db.relationship("Review", back_populates="product")


    def to_dict(self):
        return {
            'id':self.id,
            'seller_id': self.seller_id,
            'user':self.user.to_dict(),
            'title': self.title,
            'price': self.price,
            'description': self.description,
            'quantity_available': self.quantity_available,
            'created_at':self.created_at,
            'updated_at':self.created_at,

        }
    