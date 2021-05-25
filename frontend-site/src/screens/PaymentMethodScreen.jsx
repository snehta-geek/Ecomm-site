import React from "react";
import CheckOutSteps from "../CheckOutSteps";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../actions/cartAction";

const PaymentMethodScreen =(props) =>{
    const cart=useSelector(state => state.cart);
    const {shippingAddress}= cart;
    if(!shippingAddress.address) {
        props.history.push('/shipping');
    }
    const [paymentMethod,setPaymentMethod]=useState('PayPal');
    const dispatch=useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
    }
    return(
        <>
        <CheckOutSteps step1 step2 step3></CheckOutSteps>
        
        <form className="form" onSubmit={submitHandler}>
        <div className="update-container">
        <h3>Payment Method</h3>
        
        <div className="payment">
        <div>
            <input type="radio"
            id="paypal"
            value="PayPal"
            name="paymentMethod"
            required
            checked
            onChange={e => setPaymentMethod(e.target.value)} />
            <label htmlFor="paypal">PayPal</label>
        </div>
       
        <div>
            <input type="radio"
            id="paypal"
            value="Stripe"
            name="paymentMethod"
            required
            onChange={e => setPaymentMethod(e.target.value)} />
            <label htmlFor="stripe">Stripe</label>
        </div>

        <div>
            <input type="radio"
            id="paypal"
            value="Cash"
            name="paymentMethod"
            required
            onChange={e => setPaymentMethod(e.target.value)} />
            <label htmlFor="Cash">Cash On</label>
        </div>
        </div>


        <button className="primary block" type="submit">Continue</button>
        </div>
        </form>
        
       
        </>
    )
}

export default PaymentMethodScreen;