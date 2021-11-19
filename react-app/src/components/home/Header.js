import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './Header.css'
import LoginFormModal from './LoginFormModal';
import LoggedInNav from '../LoggedInNav';
import { useHistory } from 'react-router';



export default function Header() {
    const history =useHistory();
    const user = useSelector((state) => state.session.user);
    const carts = useSelector((state) => state.carts)
    const handleHome = () => {
        history.push('/')
    }

    if(user) {
        <LoggedInNav />
    } else {

        
    }
    return (
        <>
            <div className="main-nav-wrap">
                <div className="main-nav">
                    <NavLink to='/' className="logo">Craftsi</NavLink>
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
                            {/* <div className="signup-button">
                                <SignUpFormModal />
                            </div> */}
                        </>
                     :  
                        (<>
                        <div className="greeting">
                        <h3 className="greeting-header">Hi, {user.first_name}!</h3>
                        </div>
                        <div className="logout-button">
                            <LogoutButton />
                        </div>
                        </>)
                    
                    }
                    </div>
                    <div className="shopping-cart-wrapper">
                        <a href="/carts" >
                            <img className="shopping-cart-icon"src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt=""/>
                            {/* <button  
                            className="shopping-cart-icon"><i class="fas fa-shopping-cart"></i></button> */}
                        </a>
                    </div>
                    <div className="shopping-cart-length">
                        {carts.reduce((acc,item) => {
                            return acc + item.quantity
                        },0)}
                        
                    </div>
                    
                </div>
            
            </div>
            <div className="link-navbar">
                <ul>
                    <li><a href="https://github.com/fanny-chan">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/fanny-chan-892941113/">LinkedIn</a></li>
                    
                </ul>
            </div>
            <div className="end-of-link"></div>
        </>
    )
}
