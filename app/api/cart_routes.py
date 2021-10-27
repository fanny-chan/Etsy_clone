from flask import Blueprint, render_template, redirect, request
from app.models import db
from app.models import Cart, Product
from flask_wtf.csrf import generate_csrf
from app.forms import addProductToCartForm
from flask_login import current_user

cart_routes = Blueprint('carts', __name__)

# get all products in cart
@cart_routes.route('/<int:id>')
def get_cart_items(user_id):
    cart_items = Cart.query.filter(user_id = user_id)
    return [cart_item.to_dict() for cart_item in cart_items]

# add item to cart
@cart_routes.route('/add-product', methods=['POST'])
def add_cart_item(id):
    form = addProductToCartForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate():
        new_cart_item = Cart(
            user_id = current_user.id,
            product_id = form.data['product_id'],
            quantity = form.data['quantity']
        )
        db.session.add(new_cart_item)
        db.session.commit()
        return new_cart_item.to_dict()

#edit a cart_product
@cart_routes.route('/edit-product', methods=['PATCH'])
def edit_cart_item(id):
    form = addProductToCartForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate():
        cart = Cart.query.filter_by(product_id = id , user_id = current_user.id)

        cart.quantity = form.data['quantity']

        db.session.commit()
        return new_cart_item.to_dict()

#delete a cart_item
@cart_routes.route('/delete/product/<int:id>')
def delete(id):
    deleted_cart_item = Cart.query.filter(Product.id == id).first()
    db.session.delete(deleted_cart_item)
    db.session.commit()
    return deleted_cart_item.to_dict()

