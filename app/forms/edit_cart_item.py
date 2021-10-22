from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired

class editProductToCartForm(FlaskForm):
    user_id = IntegerField('user_id', type= 'hidden',validators=[DataRequired()])
    product_id = IntegerField('product_id', type= 'hidden', validators=[DataRequired()])
    quantity = IntegerField('quantity', default=1,validators=[DataRequired()])