import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import LoginFormModal from './LoginFormModal';

export default function Header() {
    return (
        <>
            <div className="main-nav-wrap">
                <div className="main-nav">
                    <Link to='/' className="logo">Etsy</Link>
                    <div className="search-bar">
                        <input className="search_input" placeholder="Search for anything" type="text"/>
                        <div className="search Icon"></div>
                    </div>
                    <div className="button-wrapper">
                        <div className="login-button">
                            <LoginFormModal />
                        </div>
                        <div className="logout-button"></div>
                    </div>
                    
                </div>
            
            </div>
        </>
    )
}
