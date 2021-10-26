from flask import Blueprint, render_template, redirect, request
from flask_login import current_user,login_required
from app.models import db, Product
from flask_wtf.csrf import generate_csrf
from app.forms import editProductForm
from flask_login import current_user, login_required
from app.forms import createNewProductForm


product_routes = Blueprint('products', __name__)

# get all products
@product_routes.route('/')
def get_products():
    products = Product.query.all()
    return {product.id:product.to_dict() for product in products}

# get specific product

@product_routes.route('/<int:id>')
def get_a_product(id):
    product = Product.query.get(id)
    print('------ONE-----', type(product))
    return product.to_dict()


# @product_routes.route('</int:id>')
# def get_a_product():
#     product = Product.query.filter(Product.id == id).first()
#     return product.to_dict()

#create a product
@product_routes.route('/new', methods=['POST'])
@login_required
def create_new_product():
    form =createNewProductForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        add_product = Product(
            user_id = form.data['user_id'],
            title = form.data['title'],
            description = form.data['description'],
            price = form.data['price'],
            quantity_available = form.data[quantity_available]
        )
        db.session.add(add_product)
        db.session.commit()

        return add_product.to_dict()
    else:
        return form.errors


@product_routes.route('/edit/<int:id>', methods=['PATCH'])
@login_required
def edit_product(id):
    form = editProductForm()

    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        product = Product.query.filter(Product.id == id).first()

        product.user_id = current_user.id
        product.title = form.data['title']
        product.price = form.data['price']
        product.description = form.data ['description']

        db.session.commit()
        return product.to_dict()
    else:
        return form.errors
    
# delete a product
@product_routes.route('/delete/<int:id>', methods=['PATCH'])
@login_required
def delete_product(id):
    #deleted_product = Product.query.filter_by(product_id == id).first()
    deleted_product = Product.query.filter(Product.id == id).first()
    db.session.delete(delete_product)
    db.session.commit()
    return delete_product.to_dict()

