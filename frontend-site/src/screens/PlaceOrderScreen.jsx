import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckOutSteps from "../CheckOutSteps";
import { Link } from "react-router-dom";
import { createOrder } from "../actions/orderAction";
import { useEffect } from "react";
import { ORDER_CREATE_RESET } from "../constants/orderConstant";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";

const PlaceOrderScreen = (props) => {
    const cart = useSelector(state => state.cart);
    if (!cart.paymentMethod) {
        props.history.push('/payment');
    }
    const orderCreate = useSelector(state => state.orderCreate);
    const {loading,success,error,order}=orderCreate;

    const toPrice = (num) => Number(num.toFixed(2));  //5.123 => "5.12" => 5.12
    cart.itemsPrice= toPrice(
        cart.cartItems.reduce((a,c) => a+ c.qty * c.price,0)
    );
    cart.shippingPrice=cart.itemsPrice > 500 ? toPrice(0) : toPrice(50);
    cart.taxPrice= toPrice(0.15 * cart.itemsPrice);
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

    const dispatch=useDispatch();

    const placeOrderHandler = () =>{
        dispatch(createOrder({...cart, orderItems:cart.cartItems}));

    };
    useEffect(() =>{
        if(success) {
            props.history.push(`/order/${order._id}`);
            dispatch({type: ORDER_CREATE_RESET});
        }
    }, [dispatch, order, props.history, success]);
    return (
        <>
            <CheckOutSteps step1 step2 step3 step4></CheckOutSteps>
            <div className="row top">
                <div className="col2">
                    <ul>
                        <li>
                            <div className="shipping-card">
                                <h3>Shipping</h3>
                                <p className="shipping-info">
                                    <strong>Name:</strong> {cart.shippingAddress.fullName} <br />
                                    <strong>Address:</strong> {cart.shippingAddress.address},
                               {cart.shippingAddress.city},{cart.shippingAddress.postalCode},
                               {cart.shippingAddress.country}
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="shipping-card">
                                <h3>Payment</h3>
                                <p className="shipping-info">
                                <strong>Method:</strong> {cart.paymentMethod}

                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="shipping-card">
                                <h3>Order Items</h3>

                                <ul>
                                    {
                                        cart.cartItems.map(item => (
                                            <li key={item.product}>
                                                <div className="ordered-items">
                                                    <div>
                                                        <img src={item.image}
                                                            alt={item.name}
                                                            className="small"></img>
                                                    </div>
                                                    <div className="back">
                                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                    </div>

                                                    <div>
                            {item.qty} x <i class="fa fa-rupee" id="rs"/>{item.price} =  
                             <i class="fa fa-rupee" id="rs"/>{item.qty * item.price}
                            
                                                    </div>

                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>

                            </div>
                        </li>
                    </ul>

                </div>
                <div className="col1">
                    <ul><li>
                    <div className="shipping-card">
                        <h3>Order Summary</h3>
                        <ul>
                            <li>
                                <div className="rowp">
                                    <div>Items</div>
                                    <div><i class="fa fa-rupee" id="rs"/>{cart.itemsPrice.toFixed(2)}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="rowp">
                                    <div>Shipping</div>
                                    <div><i class="fa fa-rupee" id="rs"/>{cart.shippingPrice.toFixed(2)}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="rowp">
                                    <div>Tax</div>
                                    <div><i class="fa fa-rupee" id="rs" />{cart.taxPrice.toFixed(2)}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="rowp">
                                    <div><strong>Total Price</strong></div>
                                    <div><strong>
                                    <i class="fa fa-rupee" id="rs" />{cart.totalPrice}
                                    </strong></div>
                                </div>
                            </li>
                            <li>
                                <button onClick={placeOrderHandler} className="btn-order"
                                disabled={cart.cartItems.length===0}>
                                    Place Order
                                </button>
                            </li>
                            {loading && <LoadingBox></LoadingBox>}           
                            {error && (
                                <MessageBox variant="danger">{error}</MessageBox>
                            )}
                        </ul>
                    </div>
                    </li></ul>
                </div>
            </div>

        </>
    )
}
export default PlaceOrderScreen;