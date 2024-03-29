"""empty message

Revision ID: dacfdff4b4ab
Revises: 456dc58d33cc
Create Date: 2021-10-27 22:42:25.827234

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'dacfdff4b4ab'
down_revision = '456dc58d33cc'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('products', sa.Column('media_url', sa.String(length=1000), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('products', 'media_url')
    # ### end Alembic commands ###
