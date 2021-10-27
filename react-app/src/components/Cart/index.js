import { useParams } from 'react-router';
import { useDispatch,useSelector } from 'react-redux';
import { React, useState, useEffect} from 'react';
import { thunkDeleteProductFromCart , thunkGetCarts } from '../../store/carts';

export default function Cart() {
    const {productId} = useParams()
    const sessionUser = useSelector((state) => state.session.user);
    const carts = useSelector(state => state.carts)
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0)

    useEffect(() => {
        dispatch(thunkGetCarts(sessionUser?.id))
    },[dispatch])

    // DELETE ITEMS FROM CART

    const handleDeleteProduct =() => {
        dispatch(thunkDeleteProductFromCart({
            product_id: productId,
            user_id: sessionUser.id
        }))
    }
    const productsSection = Object.values(carts)
    console.log('---OH---', productsSection)

    return (
        <div className="all-products"> HI
        {productsSection.map((cartItem) => 
             (
            <>
                <div>
                    <h2>{cartItem.product.title}</h2>
                </div>
                <button
                    className= "add-to-cart-button"
                    onClick={handleDeleteProduct}
                    >Delete
                </button>
            </>
            ))}
        </div>
    )
}
