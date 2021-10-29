import React ,{ useEffect }from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetAllProducts } from '../../store/products';
import './ProductDisplay.css'

export default function ProductCard() {
    const dispatch = useDispatch();
    const products = useSelector(state => state?.products)
    const productsSection = Object.values(products);
    console.log('-------OMG-----', products)
    useEffect(() => {
        dispatch(thunkGetAllProducts())
    }, [dispatch])

    return (
        <div className="product-card-container">          
            {productsSection.map((product) => (
                <div className="product-card"> 
                    <div className="product-pic"style={{backgroundImage:`url(${product.media_url})`}}>
                    <p className="product-price">{'$'+ product?.price}</p>
                    </div>
                    <div className="product-title">
                        <NavLink className="product-title" to={`/products/${product.id}`}>{product?.title}</NavLink>
                        {/* <p className="product-username">{product?.user?.username}</p>
                        <p className="product-description">{product?.description}</p> 
                        <p className="product-price">{'$'+ product?.price}</p>
                        <p className="product-quantity">{product?.quantity_available}</p>
                        <div style={{height:"30px"}}></div> */}
                    </div>
                </div>
                )
            )}
        
        </div>
    )
}

