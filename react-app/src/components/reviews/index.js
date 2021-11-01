import { useEffect, React } from 'react';
import { useDispatch} from 'react-redux';
import { thunkGetAllReviews } from '../../store/reviews';

 function Reviews() {
    const dispatch = useDispatch();

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