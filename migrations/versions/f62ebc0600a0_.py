"""empty message

Revision ID: f62ebc0600a0
Revises: 0a850ce65db0
Create Date: 2021-10-20 18:24:29.956224

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f62ebc0600a0'
down_revision = '0a850ce65db0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('products', sa.Column('title', sa.String(length=500), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('products', 'title')
    # ### end Alembic commands ###