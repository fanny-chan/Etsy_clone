import React ,{ useEffect }from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetAllProducts } from '../../store/products';
import './ProductDisplay.css'

export default function ProductCard() {
    const dispatch = useDispatch();
    const products = useSelector(state => state?.products)
    const productsSection = Object.values(products);
    
    useEffect(() => {
        dispatch(thunkGetAllProducts())
    }, [dispatch])

    return (
        <>
        <div className="product-card-container">      
            {productsSection.map((product) => (
                <div className="product-card"> 
                    <div className="product-pic"style={{backgroundImage:`url(${product.media_url})`}}>
                    <p className="product-price">{'$'+ product?.price}</p>
                    </div>
                    <div className="product-title">
                        <NavLink className="product-title" to={`/products/${product.id}`}>{product?.title}</NavLink>
                    </div>
                </div>
                )
            )}
        
        </div>
            <div className="what-is">
            <h2>What is Craftsi?</h2>
            </div>
        <div className="craftsi">
            <div className="community">
                <h3>A wonderful community</h3>
                <p>Craftsi is a global online marketplace, where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet. </p>
            </div>
            <div className="support">
                <h3>Support independent creators </h3>
                <p>There’s no Craftsi warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.</p>
            </div>
            <div className="Peace of mind">
                <h3>Peace of mind</h3>
                <p>Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
            </div>
        </div>
        </>
    )
}

