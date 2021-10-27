import React from 'react'

export default function index() {
    const {productId} = useParams()
    const sessionUser = useSelector((state) => state.session.user);

    const handleDeleteProduct =() => {
        dispatch(thunkDeleteProductFromCart({
            product_id: productId,
            user_id: sessionUser.id
        }))
    }
    return (
        <div>
            
            <button
                className= "add-to-cart-button"
                onClick={handleDeleteProduct}
                >Delete
                </button>
        </div>
    )
}
