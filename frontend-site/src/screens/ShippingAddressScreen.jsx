import React from "react";
import CheckOutSteps from "../CheckOutSteps";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartAction";

const ShippingAddressScreen = (props) => {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;
    if (!userInfo) {
        props.history.push('/signin');
    }
    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ fullName, address, city, postalCode, country })
        );
        props.history.push('/payment');
    };
    return (
        <>
            <CheckOutSteps step1 step2></CheckOutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Shipping Address</h1>
                </div>
                <div className="update-container">
                    <div className="field">
                        <label htmlFor="fulName">Full Name</label>
                        <input type="name"
                            id="fullName"
                            className="input"
                            placeholder="Enter Full Name"
                            value={fullName}
                            onChange={e => setFullName(e.target.value)}
                            required />
                    </div>

                    <div className="field">
                        <label htmlFor="address">Address</label>
                        <input type="text"
                            id="address"
                            className="input"
                            placeholder="Enter Address"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                            required />
                    </div>


                    <div className="field">
                        <label htmlFor="city">City</label>
                        <input type="text"
                            id="city"
                            className="input"
                            placeholder="Enter City"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            required />
                    </div>

                    <div className="field">
                        <label htmlFor="postalCode">Postal Code</label>
                        <input type="text"
                            id="postalCode"
                            className="input"
                            placeholder="Enter Postal Code"
                            value={postalCode}
                            onChange={e => setPostalCode(e.target.value)}
                            required />
                    </div>

                    <div className="field">
                        <label htmlFor="country">Country</label>
                        <input type="text"
                            id="country"
                            className="input"
                            placeholder="Enter Country"
                            value={country}
                            onChange={e => setCountry(e.target.value)}
                            required />
                    </div>

                   <div className="field"> <button className="btn-update">Continue</button></div>
                </div>

            </form>
        </>
    )
}

export default ShippingAddressScreen;