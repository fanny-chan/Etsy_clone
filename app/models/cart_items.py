# from .db import db

# class CartItem(db.Model):
#     __tablename__ = 'cart_items'

#     id = db.Column(db.Integer, primary_key =True)
#     user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
#     product_id = db.Column(db.Integer, db.ForeignKey("products.id"), nullable=False)
#     quantity = db.Column(db.Integer, nullable=False)
    

#     def to_dict(self):
#         return {
#             'id': self.id,
#             'user_id': self.user_id,
#             'product_id': self.product_id,
#             'quantity': self.quantity
#         }