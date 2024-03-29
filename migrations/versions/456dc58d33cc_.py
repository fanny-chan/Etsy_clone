"""empty message

Revision ID: 456dc58d33cc
Revises: 95299f28fd8d
Create Date: 2021-10-27 13:28:51.862959

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '456dc58d33cc'
down_revision = '95299f28fd8d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('carts', sa.Column('created_at', sa.DateTime(), nullable=True))
    op.add_column('carts', sa.Column('updated_at', sa.DateTime(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('carts', 'updated_at')
    op.drop_column('carts', 'created_at')
    # ### end Alembic commands ###
