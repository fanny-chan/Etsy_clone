import {cartItemObj} from './utility'

const GET_CART = 'cart/LOAD'
const ADD_TO_CART = 'cart/ADD'
const EDIT_QUANTITY_OF_PRODUCT = 'cart/EDIT'
const DELETE_PRODUCT_FROM_CART = 'cart/DELETE'

const getCart = cartObj => {
    return {
        type:GET_CART,
        cartObj
    }
}

const addToCart = cartObj => {
    return {
        type:ADD_TO_CART,
        cartObj
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

export const thunkGetCarts = () => async (dispatch) => {
    const response = await fetch(`/api/carts/`)

    if(response.ok) {
        const cartArr = await response.json();
        // const cartArr = Object.values(cartObj)
        const cartList = cartArr.items.map(item => cartItemObj(item.product_id, item.user_id, item.quantity, {
            title:item.product.title,
            description: item.product.description,
            price: item.product.price
        }))
        dispatch(getCart(cartList))
        return cartList
    }
}

export const thunkAddToCart = productInCart => async (dispatch)=> {
    const response = await fetch('/api/carts/add-product', {
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
    const response = await fetch(`/api/carts/edit-product/${cartDetails.id}`, {
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

export const thunkDeleteProductFromCart = (id) => async (dispatch) => {
    console.log('----ID---', id)
    const response = await fetch(`/api/carts/delete/product/${id}`,{
        method:'DELETE',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(id)
    })
    if (response.ok) {
        const deletedCartObj = await response.json();
        dispatch(deleteProductFromCart(deletedCartObj))
        return deletedCartObj
    }
}

const initialState = []

const cartReducer = (state = initialState, action) => {
    // let newState  = {...state}
    switch (action.type) {
        case GET_CART:
            return [...action.cartObj]
        case ADD_TO_CART:
            return [...state, action.cartObj]
        case EDIT_QUANTITY_OF_PRODUCT:
            const newState = [...state]
            const toChange = newState.findIndex(product => product.id === action.editCartObj.id)
            newState[toChange].quantity = action.editCartObj.quantity
            // return state.reduce((acc, product) => [
            //     ...acc, product.productId === action.editCartObj.id ? {
            //         ...product,
            //         quantity: action.editCartObj.id
            //     }: product ],[])
        case DELETE_PRODUCT_FROM_CART:
           return [...state.filter(product => product.productId !== action.deletedFromCartObj.id)] 
        default:
            return state
    }
}

export default cartReducer
