from flask import Blueprint, render_template, redirect, request
from app.models import db
from app.models.product import Product


product_routes = Blueprint('products', __name__, url_prefix='/products')

# get all products

@product_routes.route('/')
def get_products():
    products = Product.query.all()

    return {product.id:product.to_dict() for product in products}
    