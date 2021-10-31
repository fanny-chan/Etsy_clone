import { useEffect, useState, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { thunkGetAllReviews } from '../../store/reviews';

 function Reviews() {
    const dispatch = useDispatch();
    const {reviewId} = useParams()
    const review = useSelector(state => state?.reviews)

    useEffect(() => {
        // dispatch(thunkGetAllProducts())
        dispatch(thunkGetAllReviews())
    }, [dispatch])
    return (
        <>
        <div>
        </div>
        </>
    )
}
export default Reviews