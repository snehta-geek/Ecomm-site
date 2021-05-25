import React, { useEffect } from 'react';
import Rating from '../Rating';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import { detailsProduct } from "../actions/productActions";
import { useState } from 'react';

const ProductScreen = (props) => {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty,setQty]=useState(1);

    const productDetails = useSelector(state => state.productDetails);
    const { loading, error, product } = productDetails;
   
    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]); //dependency list  /*empty array is used so that dispatch() can run after loading & mssgbx run*/
    
    const addToCartHandler =() => {
        props.history.push(`/cart/${productId}?qty=${qty}`)
    }
    return (
        <>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                        <div>
                            <div className="back">
                                <Link to="/">Back to Shop</Link></div>
                            <div className="row top">
                                <div className="col2">
                                    <img className="large" src={product.image} alt={product.name} />

                                </div>
                                <div className="col1">
                                    <ul>
                                        <li>
                                            <h4>{product.name}</h4>
                                        </li>
                                        <li>
                                            <Rating rating={product.rating}
                                                numReviews={product.numReviews} />

                                        </li>
                                        <li>
                                            Price : <i class="fa fa-rupee" id="rs"/>{product.price}
                                        </li>
                                        <li>
                                            <p className="desc">Description :
                    {product.description}</p>
                                        </li>
                                    </ul>
                                   
                                </div>
                                <div className="col1">
                                    <div className="card card-body" id="price-container" id="cp">
                                        <ul>
                                            <li>
                                                <div className="rowp">
                                                    <h3>Price</h3>
                                                    <div className="price">
                                                    <i class="fa fa-rupee"/>{product.price}
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="rowp">
                                                    <h6>Status</h6>
                                                    <div>{product.countInStock > 0 ? (<span className="success">In Stock</span>)
                                                        : (
                                                            <span className="error">Unavailable</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </li>
                                            {product.countInStock > 0 && (
                                                <>
                                                    <li>
                                                        <div className="rowp">
                                                            <div>Qty</div>
                                                            <div>
                                                                <select
                                                                    value={qty}
                                                                    onChange={(e) => setQty(e.target.value)}>
                                    {[...Array(product.countInStock).keys()].map(                            
                                                                        x => (
                                                                            <option key={x + 1} value={x + 1}>
                                                                                {x + 1}
                                                                            </option>
                                                                        )
                                                                    )}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <button className="primary block" 
                                                        onClick={addToCartHandler}>Add to Cart</button>
                                                    </li>
                                                </>
                                            )}

                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
        </>
    )
}

export default ProductScreen;

// x+1 bcz array starts with 0 