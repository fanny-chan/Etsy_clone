import { useEffect, useState, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import {thunkCreateProduct, thunkEditProduct, thunkGetAllProducts} from '../../store/products';

export default function AllProductDisplay() {
    const dispatch = useDispatch();
    const products = useSelector(state => state?.products)
    console.log('----PRODUCTS---', products)
    const sessionUser = useSelector((state) => state.session.user);
    const quantity = useSelector(state => state?.quantity_available)

    const [title, setTitle] = useState(products?.title)
    const [description, setDescription] = useState(products?.description)
    const [quantity_available, setQuantity_available] = useState(products?.quantity_available)
    const [price, setPrice] = useState(products?.price)
    const [cart, setCart] = useState([])
    console.log('----PRODUCTS----', products)
    
    const addToCart = (product) => {
        setCart([...cart, product])
    }

    useEffect(() => {
        dispatch(thunkGetAllProducts())
    }, [dispatch])

    const handleSubmit = async(e) => {
        e.preventDefault();

        const newProduct = {
            id:products.id,
            user_id: sessionUser.id,
            title,
            description,
            price,
            quantity_available
        }
        dispatch(thunkCreateProduct(newProduct))
    }

    const handleSubmitEdit = async(e) => {
        e.preventDefault();

        const editedProduct = {
            id:products.id,
            user_id: sessionUser.id,
            title,
            description,
            price,
            quantity_available
        }
        dispatch(thunkEditProduct(editedProduct))
    }

    const productsSection = Object.values(products);

    return (
        <div className="all-products-background">
            <div className="all-product">
            {productsSection.map((product) => {
                return (
                <div>
                    <h1 className="product-title">{product?.title}</h1>
                    <div></div>
                    <p className="product-username">{product?.user?.username}</p>
                    <div></div>
                    <p className="product-description">{product?.description}</p>
                    <div></div>
                    <p className="product-price">{'$'+ product?.price}</p>
                    <p className="product-quantity">{product?.quantity_available}</p>
                    <div style={{height:"30px"}}></div>
                </div>
                )
            })}
            
            <div>
                {/* {products?.seller_id === sessionUser?.id && ( */}
                    <>
                        <form onSubmit={handleSubmitEdit}>
                            <div>
                                <div className="input-container">
                                    <input
                                    type="text"
                                    placeholder="Name of product"
                                    required
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    />
                                    <input
                                    type="number"
                                    placeholder="Price"
                                    required
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    />
                                    <input
                                    type="text"
                                    placeholder="Description"
                                    required
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    />
                                    <input
                                    type="number"
                                    placeholder="Quantity available"
                                    required
                                    value={quantity}
                                    onChange={(e) => setQuantity_available(e.target.value)}
                                    />
                                    <button type="submit" onClick={handleSubmit}>New Product</button>
                                </div>
                            </div>
                        </form>
                </>)
                {/* } */}
            </div>
            </div>
            </div>          
    )
}
