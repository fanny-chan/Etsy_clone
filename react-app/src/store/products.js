const GET_PRODUCTS ='products/LOAD'
const GET_PRODUCT_DETAILS = 'products/DETAILS'
const ADD_PRODUCTS ='products/ADD'
const EDIT_PRODUCTS ='products/EDIT'
const DELETE_PRODUCTS ='products/DELETE'

const getProducts = productObj => {
    return {
        type:GET_PRODUCTS,
        productObj
    }
}

const getProductDetails = productDetailsObj => {
    return {
        type:GET_PRODUCT_DETAILS,
        productDetailsObj
    }
}

const addProduct = newProductObj => {
    return {
        type:ADD_PRODUCTS,
        newProductObj
    }
}

const editProduct = editedProductObj => {
    return {
        type: EDIT_PRODUCTS,
        editedProductObj
    }
}

const deleteProduct = deletedProductObj => {
    return {
        type: DELETE_PRODUCTS,
        deletedProductObj
    }
}

export const thunkGetAllProducts = () => async (dispatch) => {
    const response = await fetch ('/api/products/')
    if (response.ok) {
        const productObj = await response.json();
        dispatch(getProducts(productObj))
        return productObj
    }
}

export const thunkGetProductDetails = (id) => async (dispatch) => {
    if (!id) {
        return
    }
    const response = await fetch (`/api/products/${id}`)

    console.log("--------123-----", response)
    if (response.ok) {
        let productDetailsObj = await response.json();
        dispatch(getProductDetails(productDetailsObj))
        return productDetailsObj
    }
}

export const thunkCreateProduct = productDetails => async (dispatch) => {
    const response = await fetch('/api/products/new', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(productDetails)
    })
    if (response.ok) {
        const newProductObj = await response.json();
        dispatch(addProduct(newProductObj))
        return newProductObj
    }
}
// edit product thunk
export const thunkEditProduct = productDetails => async (dispatch) => {
    const response = await fetch(`/api/products/edit/${productDetails.id}`, {
        method:'PATCH',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(productDetails)
    })
    if (response.ok) {
        const editedProductObj = await response.json()
        dispatch(editProduct(editedProductObj))
        return editedProductObj
    }
}

export const thunkDeleteProduct = id => async (dispatch) => {
    const response = await fetch(`/api/products/delete/${id}`)
    if (response.ok) {
        const deletedProductObj = await response.json();
        dispatch(deleteProduct(deletedProductObj))
        return deletedProductObj
    }
}

const initialState = {}

const productReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {
        case GET_PRODUCTS:
            return action.productObj
        case GET_PRODUCT_DETAILS:
            return action.productDetailsObj
        case ADD_PRODUCTS:
            newState[action.newProductObj.id] = action.newProductObj
            return newState
        case EDIT_PRODUCTS:
            newState[action.editedProductObj.id] = action.editedProductObj
            return newState
        case DELETE_PRODUCTS:
            delete newState[action.deletedProductObj.id]
            return newState
        default:
            return state

    }
}

export default productReducer;