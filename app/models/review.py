from .db import db
from datetime import datetime

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    content = db.Column(db.String(100), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime(), default=datetime.utcnow)
    updated_at = db.Column(db.DateTime(), default=datetime.utcnow)

    # one to many product--reviews
    product = db.relationship("Product", back_populates="reviews")

    # one to many, user -- reviews
    user = db.relationship("User", back_populates="reviews")


    def to_dict(self):
        return{
            'id': self.id,
            'user_id': self.user_id,
            'product_id': self.product_id,
            'content': self.content,
            'rating': self.rating,
            'created_at':self.created_at,
            'updated_at':self.created_at,
        }