from .db import db

# cart_products = db.Table(
#     "cart_products",
#     db.Column(
#         "cart_id",
#         db.Integer,
#         db.ForeignKey("carts.id"),
#         primary_key=True
#     ),
#     db.Column(
#         "product_id",
#         db.Integer,
#         db.ForeignKey("products.id"),
#         primary_key=True
#     )
# )

class Cart(db.Model):
    __tablename__ = 'carts'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable =False)
    quantity = db.Column(db.Integer, nullable=False)
    # created_at = db.Column(db.DateTime, server_default=text('now()'))
    # updated_at = db.Column(db.DateTime, server_default=text('now()'))

    # one to one user -- cart
    user = db.relationship("User", back_populates="cart")

    # product = db.relationship("Product". back_populates="carts")

    # many to many
    # products = db.relationship(
    #     "Product",
    #     secondary=cart_products,
    #     back_populates="carts"
    # )


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'product_id': self.product_id,
            'quantity': self.quantity
        }
        