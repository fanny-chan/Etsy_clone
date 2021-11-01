# Craftsi

## Overview

   Craftsi is is a cloned version of the original E-Commerce platform Etsy.com. Businesses can sell their handmade products online. Customers can view and add their unique items to their shopping cart where it stores all of their items. Businesses gain popularity by having reviews. Consumers are also able to leave a review on the item they've purchased.

## Live Site

https://craftsi.herokuapp.com/


## Technologies used

###Database: PostgreSQL

###Backend: Fkask, SQLAlchemy, Python

###Frontend: React, Reduc, Javascript, CSS, HTML

## Features
1. User Authentication
   Users can login and logout of an existing account. If the user does not have an account, they are able to sign  up for a new account. A guest account is already implemented for easy browsing of the website.
   ![image](https://user-images.githubusercontent.com/85082899/139649469-1703fd74-4b2d-4cfa-af90-2098a9f320ea.png)


2. Product Display
   The home page displays handmade products from sellers. Users are able to click on each photo which leads them    to the detailed page of the specific product they are interested in.
   ![image](https://user-images.githubusercontent.com/85082899/139649011-b5979b66-3478-4115-a28d-08c6f97f654d.png)


3. Product Details
   This page provides and in depth view of the product the user is interested in, this includes the price, description and who the is selling the product. Users are able to add items to cart only if they are logged in.
   ![image](https://user-images.githubusercontent.com/85082899/139649187-0b58cb7a-3680-4bf5-a0c3-c55533bb4d63.png)
 
4. Reviews 
    Within the product details page, users can leave a review about their favorite product they have purchased along with the review. If the user decides that they do not want the comment, they are able to either delete or edit it.

5. Shopping cart
   Users are required to login because they are allowed to add any items to cart. This will ensure privacy along with helping them keep track of their items. After adding the item in the cart, users have the ability to change the quantity of the product which will dynamically update the total price for the user to see. If they decide that they don't want the item, they can remove the item from the cart.
   ![image](https://user-images.githubusercontent.com/85082899/139649290-e9576669-680c-4b1e-8186-2b027c1770c8.png)

## Challenges
   The cart page was difficult for me especially updating the quantity in the cart. It is different from how reviews are implemented.It took me some time to decide whether or not I should store my cart in a local session or in the database. I did some research and there seems to be an equal amount of importance for both senarios. I did not understand why companies would want to store their cart in the database since it will take up an enormous amount of space. Although storage is important, I realize that websites who send emails reminding the user that they still have items in their cart actually stores everything in their database intead of a local session. There were more things to account for when implementing a user being able to add something to cart. I had to check if the user is adding the same item in the cart but checking to see if the user id will equal to the user id of the user and if the product id is the same as the product id of the item being passed in. These two validations will be very unique.
   ```if not query:
            new_cart_item = Cart(
                user_id = current_user.id,
                product_id = form.data['product_id'],
                quantity = form.data['quantity']
            )
            db.session.add(new_cart_item)
            db.session.commit()
            return new_cart_item.to_dict()
        else:
            query.quantity = form.data['quantity']
            return query.to_dict()```
           
This code snippet demonstrates the comparison to ensure that the item in cart cannot be duplicated.
