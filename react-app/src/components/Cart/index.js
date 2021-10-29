import { useParams } from 'react-router';
import { useDispatch,useSelector } from 'react-redux';
import { React, useState, useEffect} from 'react';
import { thunkDeleteProductFromCart , thunkEditQuantityInCart, thunkGetCarts } from '../../store/carts';

export default function Cart() {
    const sessionUser = useSelector((state) => state.session.user);
    const carts = useSelector(state => state.carts)
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0)
    const [productId, setProductId] = useState(null)
    const [quantity, setQuantity] = useState({})
    
    console.log('-----', quantity)

    useEffect(() => {
        dispatch(thunkGetCarts(sessionUser?.id))
    },[])

    useEffect(() => {
        console.log('-CARTS---', carts)
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

    const onChangeQuantity = (evt, id) => {
        dispatch(thunkEditQuantityInCart({quantity: evt, product_id:id, user_id : sessionUser.id}))
        setQuantity(s => ({...s, [id]: evt}))
    }
    const productsSection = Object.values(carts)
    let totalPrice = 0;
    const items = carts.map((cartItem) => {
        const itemPrice = cartItem.productDetails.price * quantity[cartItem.productId]
        totalPrice = itemPrice + totalPrice
        return(
       <>
           <div>
               <h2>{cartItem.productDetails.title}</h2>
           </div>
           <div>
               <h2>{itemPrice}</h2>
           </div>
           <input
           type="number"
           value={quantity[cartItem.productId]}
           onChange={evt => onChangeQuantity(evt.target.value, cartItem.productId)}
           />
           <button
               className= "add-to-cart-button"
               value={cartItem.productId}
               onClick={handleDeleteProduct}
               >Delete
           </button>
       </>
       )});

    return (
        <>
        <div className="all-products"> HI
        {items}
        </div>
        <div>
            Total:{totalPrice}
        </div>
        </>
    )
}
