from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired

class EditReviewForm(FlaskForm):
    # id = IntegerField('id', validators=[DataRequired()])
    content = StringField('content', validators=[DataRequired()])
    rating = IntegerField('rating')