import { useEffect, useState, React } from 'react';
import { thunkCreateReview } from '../../store/reviews';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';

export default function AddReviewForm() {
    const dispatch = useDispatch();
    const {productId} = useParams()
    const [reviewContent, setReviewContent] = useState("");
    const [reviewRating, setReviewRating] = useState(1);
    const product = useSelector(state => state?.products)
    const user_id = useSelector((state) => {
        return state.session.user?.id
    })

    const postReview = async (e) => {
        e.preventDefault();
        let newReview = {
            user_id: user_id,
            product_id:product.id,
            content:reviewContent,
            rating:reviewRating
        }; 
        let createdReview = await dispatch(thunkCreateReview(newReview))
    }
    

    const updateRating = (e) => setReviewRating(e.target.value)

    return (
        <div>
            <div className="new-review">
                        <input
                            type="hidden"
                            min="1"
                            required
                            value={user_id}
                            />
                        <input
                            type="hidden"
                            min="1"
                            required
                            value={productId}
                            />
                            <select 
                            onChange={updateRating}
                            className="review-rating">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <textarea
                        maxLength="500"
                        className="new-review"
                        style={{minHeight:"50px"}}
                        placeholder="Add a review"
                        value={reviewContent}
                        onChange={(e) => setReviewContent(e.target.value)}
                        required
                        />
                        <button
                            onClick={postReview}
                            className="add-a-review-button"
                            type="submit"
                            style={{height:"30px"}}
                        >
                            Add review
                        </button>
                    </div>
        </div>
    )
}
