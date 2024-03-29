from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired

class createNewProductForm(FlaskForm):
    seller_id = IntegerField('user_id', validators=[DataRequired()])
    title = StringField('title',validators=[DataRequired()])
    price = IntegerField('price',validators=[DataRequired()])
    description = StringField('description',validators=[DataRequired()])
    quantity_available = StringField('quantity_available',validators=[DataRequired()])

   