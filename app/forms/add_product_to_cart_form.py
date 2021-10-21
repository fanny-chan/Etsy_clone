from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired

class addProductToCartForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    product_id = IntegerField('product_id', validators=[DataRequired()])
    item_name = StringField('item_name', validators=[DataRequired()])
    quantity = IntegerField('quantity', default=1 validators=[DataRequired()])