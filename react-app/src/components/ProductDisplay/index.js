import { useEffect, useState, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import {thunkGetAllProducts} from '../../store/products';

export default function AllProductDisplay() {
    const dispatch = useDispatch();
    const products = useSelector(state => state?.products)
    console.log('----PRODUCTS---', products)
    const sessionUser = useSelector((state) => state.session.user);
    

    useEffect(() => {
        dispatch(thunkGetAllProducts())
    }, [dispatch])

    const productsSection = Object.values(products);

    return (
        <div className="all-products-background">
            <div className="all-product">
            {productsSection.map((product) => {
                return (
                <div>
                    {product?.title}
                    <div></div>
                    {product?.description}
                    <div></div>
                    {'$'+ product?.price}
                    <div style={{height:"30px"}}></div>
                </div>
                )
            })}
            </div>
        </div>
    )
}
