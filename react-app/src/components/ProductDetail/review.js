import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { thunkEditReviewDetails, thunkDeleteReview} from '../../store/reviews';
import './ProductDetail.css'


export default function Review({review}) {
    const dispatch = useDispatch();
    const [reviewContent, setReviewContent] = useState(review.content);
    const [reviewId, setReviewId] = useState(0);

    const updateContent = (e) => {
        setReviewContent(e.target.value);

    };
    const handleDeleteReview = (e) => {
        e.preventDefault();
        dispatch(thunkDeleteReview(e.target.value));
    }

    const updateReview = async (e) => {
        // e.preventDefault();
        let updatedContent = {
            id: reviewId,
            content:reviewContent
        };
        console.log('-------',updatedContent)
        dispatch(thunkEditReviewDetails(updatedContent))
    };
    
    return (
        <div>
            <div key={review.id}
                    className="review-whole">
                        <div className="review-header"> {review?.user?.username}
                        </div>
                        <div className="review-date">{review?.created_at}</div>
                        <div className="review-rating">{review?.rating}</div>
                        <div className="review-content"> {review?.content}
                        <input
                        className="review-input"
                        name={review.id}
                        type="text"
                        placeholder="edit your review"
                        value={reviewContent}
                        onChange={updateContent}
                        />
                        </div>
                        <div className='delete-review'>
                        <button 
                        value={review.id}
                        className='delete-review-btn'
                        onClick={handleDeleteReview}
                        >Delete Review
                        </button>
                        </div>
                        <button 
                        className="edit-review"
                        value={review.id}
                        onClick={() => {
                            setReviewId(review.id)
                            updateReview()
                        }}
                        >Edit Review
                        </button>
                    
                    </div>
                    </div>
    )
}
