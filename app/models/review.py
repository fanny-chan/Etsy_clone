from .db import db

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    content = db.Column(db.String(500), nullable=False)
    rating = db.Column(db.Integer, nullable=False)

    # one to many product--reviews
    product = db.relationship("Product", back_populates="reviews")

    # one to many, user -- reviews
    user = db.relationship("User", back_populates="reviews")


    def to_dict(self):
        return{
            'id': self.id,
            'product_id': self.product_id,
            'content': self.content,
            'rating': self.rating
        }