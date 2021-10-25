import { useEffect, useState, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {thunkGetAllProducts, thunkGetProductDetails } from '../../store/products';
import { thunkGetAllReviews,thunkDeleteReview, thunkEditReviewDetails, thunkCreateReview} from '../../store/reviews';


export const ProductDisplay = () => {
    const dispatch = useDispatch();
    const {productId} = useParams()
    const product = useSelector(state => state?.products)
    const reviews = useSelector(state => state?.reviews)
    console.log(reviews)
    console.log('-------%%%%_1------',product)
    const sessionUser = useSelector((state) => state.session.user);
    const [reviewContent, setReviewContent] = useState("");
    const [reviewRating, setReviewRating] = useState("");

    const user = useSelector(state => {
        return state.session?.user
    })

    useEffect(() => {
        // dispatch(thunkGetAllProducts())
        dispatch(thunkGetProductDetails(productId))
    }, [dispatch, productId])


    useEffect(() => {
        // dispatch(thunkGetAllProducts())
        dispatch(thunkGetAllReviews())
    }, [dispatch])

    // grabs the values of the object into an array
    const reviewsSection = Object.values(reviews);
    console.log('----frontend---', reviewsSection)
    // const productReviews = reviewsSection.map()

    const handleDeleteReview = (e) => {
        e.preventDefault();
        dispatch(thunkDeleteReview(e.target.value));
    }

    const postReview = async (e) => {
        e.preventDefault();
        let newReview = {
            user_id: sessionUser?.id,
            product_id:product.id,
            content:reviewContent,
            rating:reviewRating
        }; 
        let createdReview = await dispatch(thunkCreateReview(newReview))
    }
    const updateContent = (e) => {
        setReviewContent(e.target.value);
    }
    const updateReview = async (e) => {
        e.preventDefault();
        let updatedContent = {
            id: e.target.value,
            content:reviewContent
        };
        dispatch(thunkEditReviewDetails(updatedContent))
    };
    return (
    <>
        <div className="product-page-wrapper">
            <div className="product-container">
                <h2 className="product-title">{product?.title}</h2>
                <h2 className="review-title">WE'RE HERE</h2>
            </div>
            <div className="comments">
            {reviewsSection.map((reviews) => {
                return (
                    <div key={reviews.id}
                    className="review-username">
                        <div className="review-username"> {reviews.user.username && reviews.created_at}
                        </div>
                        <div className="review-content"> {reviews.content}
                        <input
                        className="review-input"
                        name={reviews.id}
                        type="text"
                        placeholder="edit your review"
                        // onChange={}
                        />
                        </div>
                        <div className='delete-review'>
                        <button 
                        value={reviews.id}
                        className='delete-review-btn'
                        onClick={handleDeleteReview}
                        >Delete Review
                        </button>
                        </div>
                        <button 
                        className="edit-review"
                        value={reviews.id}
                        onClick={updateReview}
                        >Edit Review
                        </button>
                        <textarea
                        className="new-review"
                        style={{minHeight:"50px"}}
                        placeholder="Add a review"
                        value={reviewContent}
                        onChange={(e) => setReviewContent(e.target.value)}
                        />
                        <button
                        onClick={postReview}
                        className="submit-review"
                        type="submit"
                        style={{heigh:"30px"}}>
                        Add review
                        </button>
                        

                    </div>
                )
            })}
            </div>
            
        </div>
    </>
    )
}

export default ProductDisplay