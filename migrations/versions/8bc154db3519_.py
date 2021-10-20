"""empty message

Revision ID: 8bc154db3519
Revises: daac0392e503
Create Date: 2021-10-20 13:02:44.292839

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8bc154db3519'
down_revision = 'daac0392e503'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('reviews', sa.Column('created_at', sa.DateTime(), nullable=True))
    op.add_column('reviews', sa.Column('updated_at', sa.DateTime(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('reviews', 'updated_at')
    op.drop_column('reviews', 'created_at')
    # ### end Alembic commands ###
