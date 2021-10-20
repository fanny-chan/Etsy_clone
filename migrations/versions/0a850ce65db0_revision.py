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
    op.alter_column('products','title',
               existing_type=sa.String(length=100),
               type_=sa.String(length=500),
               existing_nullable=False)


def downgrade():
    op.alter_column('products','title',
               existing_type=sa.String(length=500),
               type_=sa.String(length=100),
               existing_nullable=False)
