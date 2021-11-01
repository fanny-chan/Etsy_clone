import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { thunkCreateProduct } from '../../store/products'

export default function CreateProduct() {
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector( state => state.session.user);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantiy, setQuantity] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        const newProduct = {
            user_id:currentUser.id,
            title,
            description,
            price,
            quantiy
        };

        // let createdProduct = await dispatch(thunkCreateProduct(newProduct))
        // if(!createdProduct.id) {
        //     return
        // }
        // if(createdProduct) {
        //     history.push(`/products/${createdProduct?.id}`);
        // }
    };
    return (
        <>
            <section className="add-new-product-form-container">
                <section className="title">
                    <div className="title-container">
                        <h1>Create New Product</h1>
                    </div>
                </section>
            </section>
        <form onSubmit={handleSubmit}>
            <div className="create-product-container">
                <div>
                    <input
                    type="text"
                    placeholder="Add your product title"
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    />
                </div>
            </div>
            <div className="">

            </div>
        </form>
        </>
    )
}
