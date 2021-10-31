from flask import Blueprint, render_template, redirect, request
from app.models import db
from app.models import Cart, Product
from flask_wtf.csrf import generate_csrf
from app.forms import addProductToCartForm
from flask_login import current_user

cart_routes = Blueprint('carts', __name__)

# get all products in cart
@cart_routes.route('/')
def get_cart_items():
    cart_items = Cart.query.filter_by(user_id = current_user.id).all()
    return {"items":[cart_item.to_dict() for cart_item in cart_items]}
    # return {cart_item.id:cart_item.to_dict() for cart_item in cart_items}

# add item to cart
@cart_routes.route('/add-product', methods=['POST'])
def add_cart_item():
    form = addProductToCartForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    print("\n\n", "FORM VALIDATED:" ,form.validate_on_submit(), "\n\n")
    if form.validate_on_submit():
        query = Cart.query.filter_by(user_id = current_user.id , product_id = form.data['product_id'] ).first()
        print('-----QUERY---', query)
        if not query:
            new_cart_item = Cart(
                user_id = current_user.id,
                product_id = form.data['product_id'],
                quantity = form.data['quantity']
            )
            db.session.add(new_cart_item)
            db.session.commit()
            return new_cart_item.to_dict()
        else:
            # item = query.first()
            query.quantity = form.data['quantity']
            return query.to_dict()

#edit a cart_product
@cart_routes.route('/edit-product/<int:id>', methods=['PATCH'])
def edit_cart_item(id):
    form = addProductToCartForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    print("\n\n", "FORM VALIDATED:" ,form.validate_on_submit(), "\n\n")
    if form.validate_on_submit():
        cart = Cart.query.filter(Cart.product_id == id , Cart.user_id == current_user.id).first()
        print("\n\n", "CART:" ,cart, "\n\n")
        cart.quantity = form.data['quantity']
        print("\n\n", "Quantity:" ,cart.to_dict(), "\n\n")
        db.session.commit()
        return cart.to_dict()

#delete a cart_item
@cart_routes.route('/delete/product/<int:id>',methods=['DELETE'])
def delete_product_from_cart(id):
    deleted_cart_item = Cart.query.filter(Cart.product_id == id).first()
    db.session.delete(deleted_cart_item)
    db.session.commit()
    return {"id": id}

