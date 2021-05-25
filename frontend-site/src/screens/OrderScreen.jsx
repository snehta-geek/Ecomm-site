import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import CheckOutSteps from "../CheckOutSteps";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import { detailsOrder, payOrder } from "../actions/orderAction";
import { useState } from "react";
import Axios from "../../node_modules/axios/index";
import { PayPalButton } from "react-paypal-button-v2";
import { ORDER_PAY_RESET } from "../constants/orderConstant";
// import { PayPalButton } from "../../node_modules/react-paypal-button-v2/dist/index";
// import PayPalButton from 

const OrderScreen = (props) => {

    const orderId = props.match.params.id;
    const [sdkReady,setSdkReady] = useState(false);
    const orderDetails = useSelector(state => state.orderDetails);
    const {order, loading, error} = orderDetails;
    const dispatch = useDispatch();

    const orderPay = useSelector(state => state.orderPay);
    const { error:errorPay, success: successPay, loading:loadingPay } = orderPay;


    useEffect(() => {
        const addPayPalScript = async () => {
            const {data}= await Axios.get('/api/config/paypal');
            const script = document.createElement('script');
            script.type='text/javascript';
            script.src=`https://www.paypal.com/sdk/js?client-id=${data}`;
            script.async=true;
            script.onload=() => {
                setSdkReady(true);
            };
            document.body.appendChild(script);
        };
        if(!order || successPay || (order && order._id !== orderId)){
            dispatch({type: ORDER_PAY_RESET});
            dispatch(detailsOrder(orderId));
        }
        else {
            if(!order.isPaid){
               if(!window.paypal){
                   addPayPalScript();
               }
               else{
                   setSdkReady(true);
               }
            }
        }
       
    }, [dispatch, orderId, order, sdkReady,successPay]);

    const successPaymentHandler = (paymentResult) =>{
        dispatch(payOrder(order,paymentResult));

    }
    return loading ? (
        <LoadingBox></LoadingBox>
    ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
    ) : (
                <>
                <h2>Order</h2>

                    <div className="row top">
                        <div className="col2">
                            <ul>
                                <li>
                                    <div className="order-card">
                                        <h3>Shipping</h3>
                                        <p className="shipping-info">
                                            <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                                            <strong>Address:</strong> {order.shippingAddress.address},
                               {order.shippingAddress.city},{order.shippingAddress.postalCode},
                               {order.shippingAddress.country}
                                        </p>
                                        {order.isDelivered ? (
                                             <MessageBox variant="success">
                                                 Delivered at {order.deliveredAt}</MessageBox>
                                        ) : (
                                            <MessageBox variant="danger" >Not Delivered</MessageBox>
                                        )}
                                    </div>
                                </li>
                                <li>
                                    <div className="order-card">
                                        <h3>Payment</h3>
                                        <p className="shipping-info">
                                            <strong>Method:</strong> {order.paymentMethod}

                                        </p>
                                        {order.isPaid ? (
                                             <MessageBox variant="success">
                                                 Paid at {order.paidAt}</MessageBox>
                                        ) : (
                                            <MessageBox variant="danger">Not Paid</MessageBox>
                                        )}
                                    </div>
                                </li>
                                <li>
                                    <div className="order-card">
                                        <h3>Order Items</h3>

                                        <ul>
                                            {
                                                order.orderItems.map(item => (
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
                                                                {item.qty} x <i class="fa fa-rupee" id="rs" />{item.price} =
                             <i class="fa fa-rupee" id="rs" />{item.qty * item.price}

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
                            <div className="order-card">
                                <h3>Order Summary</h3>
                                <ul>
                                    <li>
                                        <div className="rowp">
                                            <div>Items</div>
                                            <div><i class="fa fa-rupee" id="rs" />{order.itemsPrice.toFixed(2)}
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rowp">
                                            <div>Shipping</div>
                                            <div><i class="fa fa-rupee" id="rs" />{order.shippingPrice.toFixed(2)}
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rowp">
                                            <div>Tax</div>
                                            <div><i class="fa fa-rupee" id="rs" />{order.taxPrice.toFixed(2)}
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rowp">
                                            <div><strong>Total Price</strong></div>
                                            <div><strong>
                                                <i class="fa fa-rupee" id="rs" />{order.totalPrice.toFixed(2)}
                                            </strong></div>
                                        </div>
                                    </li>                                   
                                   
                                   {!order.isPaid && (
                                       <li>
                                           {!sdkReady ? (
                                               <LoadingBox></LoadingBox>
                                           ) : (
                                               <>
                                               {errorPay && (
                                                   <MessageBox variant="danger">{errorPay}</MessageBox>
                                               )}
                                               {loadingPay && <LoadingBox></LoadingBox>}
                                              <PayPalButton
                                               amount={order.totalPrice}
                                               onSuccess={successPaymentHandler}>

                                               </PayPalButton>
                                              
                                               </>
                                           )}
                                       </li>
                                   )}
                                </ul>
                            </div>
                            </li></ul>
                        </div>
                    </div>

                </>

            )
}
export default OrderScreen;