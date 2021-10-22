"""revision

Revision ID: 0a850ce65db0
Revises: 9ce4ff3fb5d2
Create Date: 2021-10-20 15:44:50.160495

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0a850ce65db0'
down_revision = '9ce4ff3fb5d2'
branch_labels = None
depends_on = None


def upgrade():
    op.add_column('products', sa.Column('title', sa.VARCHAR(length=500), autoincrement=False, nullable=False))


def downgrade():
    op.drop_column('products', 'title')
