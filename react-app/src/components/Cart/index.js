import { useDispatch,useSelector } from 'react-redux';
import { React, useState, useEffect} from 'react';
import { thunkDeleteProductFromCart , thunkEditQuantityInCart, thunkGetCarts } from '../../store/carts';
import { NavLink } from 'react-router-dom';
import './Cart.css'

export default function Cart() {
    const sessionUser = useSelector((state) => state?.session?.user);
    const carts = useSelector(state => state?.carts)
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState({})
    

    useEffect(() => {
        if(sessionUser) 
        {dispatch(thunkGetCarts(sessionUser?.id))}
    },[])

    useEffect(() => {

        if (carts.length) {
            setQuantity(
                carts.reduce((acc, product) => ({...acc, [product.productId]: product.quantity}), {})
                )
        } else {
            setQuantity([]);
        }
    },[carts])

    
    // DELETE ITEMS FROM CART

    const handleDeleteProduct =(e) => {
        e.preventDefault();
        dispatch(thunkDeleteProductFromCart(e.target.value));
    }
    const user = sessionUser?.id
    const onChangeQuantity = async (evt, id) => {
        await dispatch(thunkEditQuantityInCart({quantity: evt, product_id:id, user_id : sessionUser?.id}))
        setQuantity(s => ({...s, [id]: evt}))
        // await dispatch(thunkGetCarts(user))
    }
    
    
    let totalPrice = 0;
    const items = carts.map((cartItem) => {
        const itemPrice = cartItem?.productDetails?.price * quantity[cartItem?.productId]
        totalPrice = itemPrice + totalPrice
        return(
        <div key={`cartItem-${cartItem?.productId}`}>   
            <div className="cart-page-container">  
                <div className="product-image">
                </div>   
                <div className="title">
                    <NavLink className="product-title" to={`/products/${cartItem?.productId}`}>{cartItem?.productDetails?.title}</NavLink>
                    {/* <div className="inner-title">
                        <h2>{cartItem?.productDetails?.title}</h2> */}
                        <input
                        className="qty-cart-page"
                        type="number"
                        value={
                            quantity[cartItem?.productId] ?
                            quantity[cartItem?.productId]
                            : ""
                        }
                        onChange={evt => onChangeQuantity(evt?.target?.value, cartItem?.productId)}
                        />
                        <button
                            className= "remove-button"
                            value={cartItem?.productId}
                            onClick={handleDeleteProduct}
                            >Remove
                        </button>
                    </div>
                    <div className="price-cart-page">
                    <h2>${itemPrice}</h2>
                    {/* </div> */}
                </div>
            </div>
        </div>
        )});

        return (
            <>
            <div id="cart-header">{carts.length} Items in your cart</div>
           
            <div className="all-products"> 
            {items}
            </div>
            <div className="cart-div-seperator"></div>
            <div className="total-price-cart">
                Total: ${totalPrice}
        </div>
        </>
    )
}
