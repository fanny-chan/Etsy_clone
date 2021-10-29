import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './Header.css'
import LoginFormModal from './LoginFormModal';
import SignUpFormModal from './SignupFormModal';
import LoggedInNav from '../LoggedInNav';


export default function Header() {

    const user = useSelector((state) => state.session.user);

    if(user) {
        <LoggedInNav />
    } else {
        
    }
    return (
        <>
            <div className="main-nav-wrap">
                <div className="main-nav">
                    <Link to='/' className="logo">Craftsi</Link>
                    <div className="search-bar">
                        <input className="search-input" placeholder="Search for anything" type="text"/>
                        <div className="search Icon"></div>
                    </div>
                    <div className="button-wrapper">
                    {!user ?
                        <>
                            <div className="login-button">
                                <LoginFormModal />
                            </div>
                            <div className="signup-button">
                                <SignUpFormModal />
                            </div>
                        </>
                     :  
                        <>
                        <div className="greeting">
                        <h3 className="header">Hi, {user.first_name}</h3>
                        </div>
                        <div className="logout-button">
                            <LogoutButton />
                        </div>
                        </>
                    }
                    </div>
                    <div className="shopping-cart">
                        <a href="/carts">
                            <img src="https://toppng.com/uploads/preview/shopping-cart-png-image-shopping-cart-icon-sv-11562865326ta92uix1ak.png" alt=""
                            className="shopping-cart-icon"/>
                        </a>
                    </div>
                    
                </div>
            
            </div>
            <div className="link-navbar">
                <ul>
                    <li><a href="/">Holiday Shop</a></li>
                    <li><a href="/">Jewelry & Accessories</a></li>
                    <li><a href="/">Clothing & Shoes</a></li>
                    <li><a href="/">Home & Living</a></li>
                    <li><a href="/">Wedding & Party</a></li>
                    <li><a href="/">Toys & Entertainment</a></li>
                    <li><a href="/">Art & Collectibles</a></li>
                    <li><a href="/">Craft Supplies</a></li>
                    <li><a href="/">Gifts & Gift Cards</a></li>
                </ul>
            </div>
        </>
    )
}
