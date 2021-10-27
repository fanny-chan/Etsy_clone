import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch, React} from 'react';
import { thunkDeleteProductFromCart } from '../../store/carts';

export default function Cart() {
    const {productId} = useParams()
    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();

    const handleDeleteProduct =() => {
        dispatch(thunkDeleteProductFromCart({
            product_id: productId,
            user_id: sessionUser.id
        }))
    }
    return (
        <div>
            <h2>CART</h2>
            <button
                className= "add-to-cart-button"
                onClick={handleDeleteProduct}
                >Delete
            </button>
        </div>
    )
}
