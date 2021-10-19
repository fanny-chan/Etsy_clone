from .db import db

class Cart(db.Model):
    __table__ = 'carts'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable =False)


    user = db.relationship("User", back_populates="carts")
    product = db.relationship("Product". back_populates="carts")