const GET_REVIEWS = 'reviews/LOAD'
const ADD_REVIEWS = 'reviews/ADD'
const EDIT_REVIEWS = 'reviews/EDIT'
const DELETE_REVIEWS = 'reviews/DELETE'

//POJO action: get all reviews
const getReviews = reviewObj => {
    return {
        type: GET_REVIEWS,
        reviewObj
    }
}
//POJO action: create new review
const addReview = newReviewObj => {
    return {
        type: ADD_REVIEWS,
        newReviewObj
    }
}
//POJO action: edit a review
const editReview = editReviewObj => {
    return {
        type: EDIT_REVIEWS,
        editReviewObj
    }
}
//POJO action: delete a review
const deleteReview = deleteReviewObj => {
    return {
        type: DELETE_REVIEWS,
        deleteReviewObj
    }
}

//Thunks
// get all reviews thunk
export const thunkGetAllReviews = () => async (dispatch) => {
    const response = await fetch ('/api/reviews')

    if(response.ok) {
        const reviewsObj = await response.json();
        dispatch(getReviews(reviewsObj))
        return reviewsObj
    }
}
// create a review thunk
export const thunkCreateReview = reviewDetails => async (dispatch) => {
    const response = await fetch ('/api/reviews/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reviewDetails)
    })
    if (response.ok) {
        const newReviewObj = await response.json();
        dispatch(addReview(newReviewObj));
        return newReviewObj
    }
}

// edit all reviews thunk
export const thunkEditReviewDetails = reviewDetails => async(dispatch) => {
    console.log('this is thunk ======>', reviewDetails)
    const response = await fetch (`/api/reviews/edit/${reviewDetails.id}`, {
        method: 'PATCH',
        headers:{'content-type':'application/json'},
        body: JSON.stringify(reviewDetails)
    })
    if (response.ok) {
        const editedReviewObj = await response.json()
        console.log('this is response object', editedReviewObj)
        dispatch(editReview(editedReviewObj))
        return editedReviewObj
    } else {
        console.log('issue on backend')
    }
}
// delete a reviews thunk
export const thunkDeleteReview = id => async (dispatch) => {
    const response = await fetch(`/api/reviews/delete/${id}`, {
        method:'DELETE',
        body: JSON.stringify(id)
    })
    if(response.ok) {
        const deletedReviewObj = await response.json();
        dispatch(deleteReview(deletedReviewObj))
        return deletedReviewObj
    }
}

//reducer

const initialState = {}

export default function reviewReducer(state = initialState, action) {
    const newState = {...state}
    switch(action.type) {
        case GET_REVIEWS:
            return action.reviewObj
            
        case ADD_REVIEWS:
            newState[action.newReviewObj.id] = action.newReviewObj
            return newState

        case EDIT_REVIEWS:
            console.log(action.editReviewObj)
            newState[action.editReviewObj.id] = action.editReviewObj
            return newState
            
        case DELETE_REVIEWS:
            delete newState[action.deleteReviewObj.id]
            return newState

        default:
            return state
    }

}

