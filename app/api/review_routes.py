from flask import Blueprint, render_template, redirect, request
from flask_login import login_required, current_user
from app.models import db, Review
from app.models.product import Product
from app.forms import EditReviewForm
from app.forms import NewReviewForm


review_routes = Blueprint('reviews', __name__)

# get all reviews
@review_routes.route('/')
def get_reviews():
    reviews = Review.query.all()
    print('-----REVIEW----', type(reviews))
    return {review.id:review.to_dict() for review in reviews}

# specific review
@review_routes.route('/<int:id>')
def get_one_review(id):
    review = Review.query.filter(Review.id == id).first()
    return review.to_dict()

# create a review 
@review_routes.route('/new', methods=['POST'])
@login_required
def create_a_review():
    form = NewReviewForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        review = Review(
            user_id = current_user.id,
            product_id = form.data['product_id'],
            content  = form.data['content'],
            rating = form.data['rating']
        )
        db.session.add(review)
        db.session.commit()
        return review.to_dict()
    else:
        return form.errors

# edit a review
@review_routes.route('/edit/<int:id>', methods =['PATCH'])
@login_required
def edit_a_review(id):
    form = EditReviewForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    print("\n\n", "FORM VALIDATED:" ,form.validate_on_submit(), "\n\n")
    print("\n\n", "DATA:" ,form.data, "\n\n")
    if form.validate_on_submit():
        #edited_review = Review.query.filter(Review.id == id).first()
        edited_review = Review.query.get(id)
        print("\n\n", "EDITED_REVIEW:" ,edited_review, "\n\n")
        edited_review.content = form.data['content']
            # Include the updated + created at? to show time review was made
        db.session.commit()
        print("\n\n", "EDITTED_REVIEW.TODICT:" ,edited_review.to_dict(), "\n\n")
        return edited_review.to_dict()
    else:
        return "Sorry, you do not own this review"

# delete a specific review
@review_routes.route('/delete/<int:id>', methods=['DELETE'])
@login_required
def delete_review(id):
    deleted_review = Review.query.filter(Review.id == id).first()
    db.session.delete(deleted_review)
    db.session.commit()

    return deleted_review.to_dict()


    