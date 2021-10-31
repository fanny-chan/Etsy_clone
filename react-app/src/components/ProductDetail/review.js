import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { thunkEditReviewDetails, thunkDeleteReview, thunkGetAllReviews} from '../../store/reviews';
import './ProductDetail.css'


export default function Review({review}) {
    const dispatch = useDispatch();
    const [reviewContent, setReviewContent] = useState(review.content);
    const [reviewId, setReviewId] = useState(0);
    const user = useSelector((state) => state.session.user);
    console.log('---USER---', user)
    console.log('----review---', review)


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
        dispatch(thunkEditReviewDetails(updatedContent))
    };
    
    return (
        <div>
            <div key={review.id} className="review-whole">
                <div className="review-block">
                    <div className="review-header"> {review?.user?.username}
                    <div className="review-date">{review?.created_at}</div>
                    </div>
                    <div className="review-rating">Rating: {review?.rating} stars</div>
                    <div className="review-content"> {review?.content}
                    </div>
                    {user?.id === review?.user_id &&(
                    <>
                        <input
                        className="review-input"
                        name={review.id}
                        type="text"
                        placeholder="edit your review"
                        value={reviewContent}
                        onChange={updateContent}
                        />
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
