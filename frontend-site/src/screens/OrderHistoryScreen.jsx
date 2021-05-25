import React from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import { useEffect } from "react";
import { listOrderMine } from "../actions/orderAction";

const OrderHistoryScreen = (props) =>{
    const orderMineList = useSelector(state => state.orderMineList);
    const {loading, error, orders} = orderMineList;
    const dispatch=useDispatch();
    useEffect(() =>{
        dispatch(listOrderMine());
    },[dispatch]);
    return (
        <>
        <h2>Order History</h2>
        {loading ? (
            <LoadingBox></LoadingBox>
        ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>

        ) : (
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>DATE</th>
                        <th>TOTAL</th>
                        <th>PAID</th>
                        <th>DELIVERED</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key ={order._id}>
                            <td>{order._id}</td>
                            <td>{order.createdAt.substring(0,10)}</td>
                            <td><i class="fa fa-rupee" id="rs"/>{order.totalPrice.toFixed(2)}</td>
                            <td>{order.isPaid ? order.paidAt.substring(0,10) : 'No'}</td>
                            <td>{order.isDelivered ? order.deliveredAt.substring(0,10) : "No"}</td>
                            <td>
                                <button className="primary block"
                                onClick={() =>{
                                    props.history.push(`/order/${order._id}`);}}>
                                    Details</button>
                                    </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}

        </>
    )
};

export default OrderHistoryScreen;