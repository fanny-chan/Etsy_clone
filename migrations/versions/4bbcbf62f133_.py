"""empty message

Revision ID: 4bbcbf62f133
Revises: c883fa54504e
Create Date: 2021-10-21 20:17:48.754632

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4bbcbf62f133'
down_revision = 'c883fa54504e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('cart_products')
    op.drop_table('cart_items')
    op.add_column('carts', sa.Column('quantity', sa.Integer(), nullable=False))
    op.add_column('products', sa.Column('title', sa.String(length=500), nullable=False))
    op.add_column('products', sa.Column('quantity_available', sa.Integer(), nullable=False))
    op.add_column('products', sa.Column('created_at', sa.DateTime(), nullable=True))
    op.add_column('products', sa.Column('updated_at', sa.DateTime(), nullable=True))
    op.alter_column('reviews', 'content',
               existing_type=sa.VARCHAR(length=500),
               type_=sa.String(length=100),
               existing_nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('reviews', 'content',
               existing_type=sa.String(length=100),
               type_=sa.VARCHAR(length=500),
               existing_nullable=False)
    op.drop_column('products', 'updated_at')
    op.drop_column('products', 'created_at')
    op.drop_column('products', 'quantity_available')
    op.drop_column('products', 'title')
    op.drop_column('carts', 'quantity')
    op.create_table('cart_items',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('product_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('quantity', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['product_id'], ['products.id'], name='cart_items_product_id_fkey'),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name='cart_items_user_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='cart_items_pkey')
    )
    op.create_table('cart_products',
    sa.Column('cart_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('product_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['cart_id'], ['carts.id'], name='cart_products_cart_id_fkey'),
    sa.ForeignKeyConstraint(['product_id'], ['products.id'], name='cart_products_product_id_fkey'),
    sa.PrimaryKeyConstraint('cart_id', 'product_id', name='cart_products_pkey')
    )
    # ### end Alembic commands ###
