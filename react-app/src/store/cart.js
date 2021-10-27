const GET_CART = 'cart/LOAD'
const ADD_TO_CART = 'cart/ADD'
const EDIT_QUANTITY_OF_PRODUCT = 'cart/EDIT'
const DELETE_PRODUCT_FROM_CART = 'cart/DELELTE'

const getCart = cartObj => {
    return {
        type:GET_CART,
        cartObj
    }
}

const addToCart = addToCartObj => {
    return {
        type:ADD_TO_CART,
        addToCartObj
    }
}

const editQuantityOfProduct = editCartObj => {
    return {
        type:EDIT_QUANTITY_OF_PRODUCT,
        editCartObj
    }
}

const deleteProductFromCart = deletedFromCartObj => {
    return {
        type:DELETE_PRODUCT_FROM_CART,
        deletedFromCartObj
    }
}

export const thunkGetCarts = (id) => async (dispatch) => {
    const response = await fetch(`/api/carts/${id}`)

    if(response.ok) {
        const cartObj = await response.json();
        cartObj.map(item => cartItemObj(item.product_id, item.user_id, item.quantity))
        dispatch(getCart(cartObj))
        return cartObj
    }
}

export const thunkAddToCart = productInCart => async (dispatch)=> {
    const response = await fetch('/api/carts/add-products', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(productInCart)
    })
    if (response.ok) {
        const newCartObj = await response.json();
        dispatch(addToCart(newCartObj))
        return newCartObj
    }
}

export const thunkEditQuantityInCart = cartDetails => async (dispatch) => {
    const response = await fetch('/api/carts/edit-product', {
        method:'PATCH',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(cartDetails)
    })
    if (response.ok) {
        const editedCartObj = await response.json()
        dispatch(editQuantityOfProduct(editedCartObj))
        return editedCartObj
    }
}

export const thunkDeleteProductFromCart = (cartDetails) => async (dispatch) => {
    const response = await fetch(`/api/carts/delete/product/${cartDetails.id}`)
    if (response.ok) {
        const deletedCartObj = await response.json();
        dispatch(deleteProductFromCart(deletedCartObj))
        return deletedCartObj
    }
}
const initialState = []

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CART:
            return action.cartObj
        case ADD_TO_CART:
            return [...state, action.cartObj]
        case EDIT_QUANTITY_OF_PRODUCT:
            return [...state.filter(item => item.productId !== action.cartObj.productId), action.cartObj]
        case DELETE_PRODUCT_FROM_CART:
            return [...state.filter(item => item.productId !== action.cartObj.productId)], action.carObj
    }
}

export default cartReducer