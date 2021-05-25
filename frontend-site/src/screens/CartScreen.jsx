import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToCart, removeFromCart } from "../actions/cartAction";
import MessageBox from "../MessageBox";
import { Link } from "react-router-dom";

const CartScreen = (props) => {
    const productId = props.match.params.id;
    const qty = props.location.search ?
        Number(props.location.search.split('=')[1]) : 1;

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {                   
            dispatch(addToCart(productId, qty))        //if u change existing product from productscreen to cartscreen,call action
        }
    }, [dispatch, productId, qty]);               /*add variables into dependencies list of useeffct*/

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))

    };
    const checkOutHandler = () => {
        props.history.push('/signin?redirect=shipping')
    }

    return (
        <>
            <div className="row top">
                <div className="col2 back">
                    <h2>Shopping Cart</h2>
                    {cartItems.length === 0 ? (
                        <MessageBox>
                            Your Cart is Empty!!! Add items to it now.
                    <Link to="/"> Go Shopping</Link>
                        </MessageBox>
                    )
                        :
                        (<ul>
                            {
                                cartItems.map(item => (
                                    <li key={item.product}>
                                        <div className="cart-items">
                                            <div>
                                                <img src={item.image}
                                                    alt={item.name}
                                                    className="small"></img>
                                            </div>
                                            <div className="min-30 back">
                                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                                            </div>
                                            <div>
                                                <select id="select"
                                                value={item.qty}
                                                    onChange={e => dispatch(addToCart(item.product,  //if u change existing product's qty in cartscreen,call action
                                                         Number(e.target.value))
                                                    )}>
                                                    {[...Array(item.countInStock).keys()].map(
                                                        x => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                            <div>
                                            <i class="fa fa-rupee" id="rs"/>{item.price}
                                            </div>
                                            <div>
                                                <button className="primary block" onClick={() =>
                                                    removeFromCartHandler(item.product)}>
                                                   Remove
                                        </button>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }<br></br>
                             <Link to="/">Back to Shop</Link>
                        </ul>
                       
                        )}
                </div>
                <div className="col1">
                    <div className="card card-body" id="cp">
                        <ul>
                            <li>
                                <h4>
                                    Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) :{' '}
                                    <i class="fa fa-rupee"/>
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                                </h4>
                            </li>
                            <button className="primary block"
                                onClick={checkOutHandler}
                                disabled={cartItems.length === 0}>
                                Proceed to CheckOut
                        </button>
                        </ul>
                    </div>
                </div>

            </div>
            
        </>
    )

}

export default CartScreen;