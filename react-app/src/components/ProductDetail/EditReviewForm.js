import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { thunkEditReviewDetails, thunkDeleteReview} from '../../store/reviews';
import './ProductDetail.css'

export default function EditReviewForm({review, onClose}) {

    const dispatch = useDispatch();
    const [reviewContent, setReviewContent] = useState(review.content);
    const [reviewId, setReviewId] = useState(0);
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
            id: reviewId,
            content:reviewContent
        };
        dispatch(thunkEditReviewDetails(updatedContent)
        )
        onClose()
    };
    
    return (
        <div>
            <div key={review.id} className="review-whole">
                <div className="review-block">
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
                            setReviewId(review.id)
                            updateReview()
                        }}
                        >Edit Review
                        </button>
                        </div>
                    </>
                    )}
                </div>
                    
            </div>
        </div>
    )
}
