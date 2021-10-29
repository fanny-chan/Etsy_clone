import { useEffect, useState, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { thunkAddToCart } from '../../store/carts';
import { thunkGetProductDetails } from '../../store/products';
import { thunkGetAllReviews,thunkDeleteReview, thunkEditReviewDetails, thunkCreateReview} from '../../store/reviews';
import Reviews from '../reviews';
import Review from './review';
import './ProductDetail.css'
import AddReviewModal from './AddReviewModal';


export const ProductDisplay = () => {
    const dispatch = useDispatch();
    const {productId} = useParams()
    const product = useSelector(state => state?.products)
    const reviews = useSelector(state => state?.reviews)
    const sessionUser = useSelector((state) => state.session.user);
    const user_id = useSelector((state) => {
        return state.session.user?.id
    })
    const [reviewContent, setReviewContent] = useState("");
    const [reviewRating, setReviewRating] = useState("");
    const [reviewId, setReviewId] = useState(0);
    const [quantity, setQuantity] = useState(1);
    

    const user = useSelector(state => {
        return state.session?.user
    })

    const handleAddToCart = () => {
        dispatch(thunkAddToCart({
            product_id: productId, 
            user_id: user_id, 
            quantity 
        }))
    }
    

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
    const specificReview = reviewsSection.filter((review) => review.product_id === product.id )
    // const productReviews = reviewsSection.map()

    const handleDeleteReview = (e) => {
        e.preventDefault();
        dispatch(thunkDeleteReview(e.target.value));
    }

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

    const updateContent = (e) => {
        setReviewContent(e.target.value);

        // let review = specificReview.filter((item) => item.id.toString() === e.target.name)
    };
    const updateRating = (e) => setReviewRating(e.target.value)

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
    <>
        <div className="product-page-wrapper">
            <div className="product-container">
                <h2 className="product-title">{product?.title}</h2>

                <h2 className="review-title">WE'RE HERE</h2>
                    <input
                        type="number"
                        min="1"
                        required
                        value ={quantity}
                        onChange={e => setQuantity(Number(e?.target?.value) ?? 1)}
                    />
                <button
                className= "add-to-cart-button"
                onClick={handleAddToCart}
                >Add to Cart
                </button>
            </div>
            <div className="comments">
            {specificReview.map((review) => {
                return (
                    <Review 
                    key={review.id}
                    review={review}
                    />
                )
            })}
                    {/* <div className="new-review">
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
                        className="new-review"
                        style={{minHeight:"50px"}}
                        placeholder="Add a review"
                        value={reviewContent}
                        onChange={(e) => setReviewContent(e.target.value)}
                        />
                        <button
                            onClick={postReview}
                            className="add-a-review-button"
                            type="submit"
                            style={{height:"30px"}}
                        >
                            Add review
                        </button>
                    </div> */}
                    <div>
                        <AddReviewModal />
                    </div>
            </div>
            
        </div>
    </>
    )
}


export default ProductDisplay