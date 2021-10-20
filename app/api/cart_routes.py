from flask import Blueprint, render_template, redirect, request
from app.models import db
from app.models.cart import Cart

cart_routes = Blueprint('cart_item', __name__, url_prefix='/cart_items')

# get all products in cart

@cart_routes.route('/')
def get_cart_items():
    cart_items = Cart.query.all()
    return {cart.id:cart.to_dict() for product in carts}

@cart_routes.route('/<int:id>', methods=['PATCH'])
def edit_cart_item(id):
    
