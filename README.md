# Craftsi

## Overview

Craftsi is is a cloned version of the original E-Commerce platform Etsy.com. Businesses can sell their handmade products online. Customers can view and add their unique items to their shopping cart where it stores all of their items. Businesses gain popularity by having reviews. Consumers are also able to leave a review on the item they've purchased.

## Live Site

https://craftsi.herokuapp.com/


## Technologies used

Database: PostgreSQL
Backend: Fkask, SQLAlchemy, Python
Frontend: React, Reduc, Javascript, CSS, HTML

## Features
1. User Authentication
   Users can login and logout of an existing account. If the user does not have an account, they are able to sign up for a new account. A guest account is already implemented for easy browsing of the website.
   ![image](https://user-images.githubusercontent.com/85082899/139649011-b5979b66-3478-4115-a28d-08c6f97f654d.png)


2. Product Display
   The home page displays handmade products from sellers. Users are able to click on each photo which leads them to the detailed page of the specific product they are interested in.


3. Product Details
   This page provides and in depth view of the product the user is interested in, this includes the price, description and who the is selling the product. Users are able to add items to cart only if they are logged in.
 
4. Reviews 
    Within the product details page, users can leave a review about their favorite product they have purchased along with the review. If the user decides that they do not want the comment, they are able to either delete or edit it.

5. Shopping cart
   Users are required to login because they are allowed to add any items to cart. This will ensure privacy along with helping them keep track of their items. After adding the item in the cart, users have the ability to change the quantity of the product which will dynamically update the total price for the user to see. If they decide that they don't want the item, they can remove the item from the cart.
