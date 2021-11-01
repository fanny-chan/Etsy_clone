from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField, SubmitField
from wtforms.validators import DataRequired

class NewReviewForm(FlaskForm):
    user_id = IntegerField('user_id')
    product_id = IntegerField('product_id')
    content = StringField('content',validators= [DataRequired()])
    rating = IntegerField('rating', validators=[DataRequired()])
    submit = SubmitField('Submit')