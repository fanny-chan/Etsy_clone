import React from 'react'
import { useSelector } from 'react-redux'

export default function Splash() {
    const products =useSelector(store => store.products)

    // const allProducts = Object.values(products)?.map(product => (

    return (
            <div>
                <div className="end-of-link"></div>
                <div className="script">Start your holiday prep with the most meaningful gifts.</div>
                <div className="circle-images-wrapper">
                    <ul>
                        <li>
                            <a href="">
                                <img src={window.giftURL} alt="" className="round-images" />
                            Advent Calendars
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        )
    
}
