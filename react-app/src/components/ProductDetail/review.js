import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { thunkEditReviewDetails, thunkDeleteReview, thunkGetAllReviews} from '../../store/reviews';
import './ProductDetail.css'
import EditReviewModal from './EditReviewModal';


export default function Review({review}) {
    const dispatch = useDispatch();
    const [reviewContent, setReviewContent] = useState(review.content);
    // const [reviewId, setReviewId] = useState(0);
    const user = useSelector((state) => state.session.user);

    const [reviewError, setReviewError] = useState({})

    const validateReview = () => {
        const reviewError = {};
        
        if(reviewContent.length > 500) {
            reviewError["reviewContent"] = "Your review has exceeded 500 characters"
        }
        if(!reviewContent) {
            reviewError["reviewContent"] = "Content cannot be empty"
        }

        return reviewError
    }


    const updateContent = (e) => {
        setReviewContent(e.target.value);
    };

    const handleDeleteReview = (e) => {
        e.preventDefault();
        dispatch(thunkDeleteReview(e.target.value));
    }
    const updateReview = async (e) => {
        // e.preventDefault();

        const reviewErrors = validateReview();
        if(Object.keys(reviewErrors).length > 0) return setReviewError(reviewErrors)

        let updatedContent = {
            id: review.id,
            content:reviewContent
        };
        dispatch(thunkEditReviewDetails(updatedContent))
    };
    
    return (
        <div>
            <div key={review.id} className="review-whole">
                <div className="review-block">
                    <div className="review-header"> {review?.user?.username}
                    <div className="review-date">{review?.created_at}</div>
                    </div>
                    <div className="review-rating-star">Rating: {review?.rating} star(s)</div>
                    <div className="review-content"> {review?.content}
                    </div>
                    {user?.id === review?.user_id &&(
                    <>
                        <textarea
                        className="review-input"
                        name={review.id}
                        type="text"
                        placeholder="edit your review"
                        value={reviewContent}
                        onChange={updateContent}
                        />
                        {reviewError.reviewContent &&(
                            <div className="review-error-handling">
                            {reviewError.reviewContent}
                            </div>
                        )}
                        <div className="review-btns">
                        <div className='delete-review'>
                        <button 
                        value={review.id}
                        className='delete-review-btn'
                        onClick={handleDeleteReview}
                        >Delete
                        </button>
                        </div>
                        <button 
                        className="edit-review-btn"
                        value={review.id}
                        onClick={() => {
                            updateReview()
                        }}
                        >Edit Review
                        </button>
                        {/* <div>
                            <EditReviewModal review={review} />
                        </div> */}
                        </div>
                    </>
                    )}
                </div>
                    
            </div>
        </div>
    )
}
