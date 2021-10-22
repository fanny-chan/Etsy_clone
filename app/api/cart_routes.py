from flask import Blueprint, render_template, redirect, request
from app.models import db
from app.models import Cart
from flask_wtf.csrf import generate_csrf
from app.forms.add_product_to_cart_form import addProductToCartForm
from flask_login import current_user

cart_routes = Blueprint('carts', __name__)

# get all products in cart

@cart_routes.route('/')
def get_cart_items():
    cart_items = Cart.query.all()
    return {cart.id:cart.to_dict() for product in carts}

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

@cart_routes.route('/edit-product', methods=['PATCH'])
def edit_cart_item(id):
    form = addProductToCartForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate():
        cart = Cart.query.filter_by(product_id == id , user_id = current_user.id)

        cart.quantity = form.data['quantity']

        db.session.commit()
        return new_cart_item.to_dict()

