import { useEffect, useState, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory} from 'react-router-dom';
import { thunkAddToCart } from '../../store/carts';
import { thunkGetProductDetails } from '../../store/products';
import { thunkGetAllProducts } from '../../store/products';
import { thunkGetAllReviews,thunkDeleteReview, thunkEditReviewDetails, thunkCreateReview} from '../../store/reviews';
import Review from './review';
import './ProductDetail.css'
import AddReviewModal from './AddReviewModal';
import LoginFormModalAddToCart from '../home/LoginFormModal/AddToCartLoginModal';



export const ProductDisplay = () => {
    const dispatch = useDispatch();
    const {productId} = useParams()
    const products = useSelector(state => Object.values(state?.products))
    const reviews = useSelector(state => state?.reviews)
    const user_id = useSelector(state => state.session.user?.id);
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
    
    const oneProduct = products?.filter(product => product.id === +productId)[0]


    useEffect(() => {
        dispatch(thunkGetAllProducts())
        // dispatch(thunkGetProductDetails(productId))
    }, [dispatch, productId])


    useEffect(() => {
        dispatch(thunkGetAllReviews())
    }, [dispatch])

    // grabs the values of the object into an array
    const reviewsSection = Object.values(reviews);
    const specificReview = reviewsSection.filter((review) => review.product_id === oneProduct.id )
    // const productReviews = reviewsSection.map()

    const handleDeleteReview = (e) => {
        e.preventDefault();
        dispatch(thunkDeleteReview(e.target.value));
    }

    const postReview = async (e) => {
        e.preventDefault();
        let newReview = {
            user_id: user_id,
            product_id:products.id,
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
        dispatch(thunkEditReviewDetails(updatedContent))
    };

    return (
        <>
            <div className="product-page-wrapper">
                <div className="product-container-left">
                    <div className="image-container">
                        {/* <div className="vertical-images"></div> */}
                        <div className="main-image">
                            <div className="image-div"style={
                                oneProduct?.media_url
                                ?
                                {backgroundImage:`url(${oneProduct?.media_url})`}
                                : {display:"none"}
                        } alt="">
                            </div>
                        </div>
                    </div>                   
                    <div className="reviews-container">
                        <h2 className="review-title">Reviews</h2>
                        <div className="comments">
                        {specificReview.map((review) => {
                            return (
                                <Review 
                                key={review.id}
                                review={review}
                                />
                            )
                        })}
                            <div>
                                <AddReviewModal />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="product-container-right">
                    <p className="username">Seller: {oneProduct?.user?.username}</p>
                    <h1 className="product-title-details">{oneProduct?.title}</h1>
                        <p className="price">${oneProduct?.price}</p>
                    <div className="quantity">
                        <span className="qty-tag">Quantity:</span>
                        <input  
                            className="quantity-input"
                            type="number"
                            min="1"
                            required
                            value ={quantity}
                            onChange={e => setQuantity(Number(e?.target?.value) ?? 1)}
                            />
                        {user ? 
                        (<button
                        className= "add-to-cart-button"
                        onClick={handleAddToCart}
                        >Add to Cart
                        </button>)
                        :
                        <LoginFormModalAddToCart /> 
                        }          
                    </div>
                    <div className="description-tag">Description</div>
                    <div className="product-description-right">{oneProduct?.description}
                    </div>
                </div>
            </div>
           
        </>
    )
}


export default ProductDisplay