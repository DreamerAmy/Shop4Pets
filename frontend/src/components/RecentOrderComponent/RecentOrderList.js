import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderItem from "./RecentOrderItem";
import { findOrderByBuyerIdThunk } from "../../services/OrderThunks";
import "../../screens/ProfileScreen/index.css";

const RecentOrderList = (data) => {
    const bid = data.bid;
    const { order, loading } = useSelector((state) => state.order)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(findOrderByBuyerIdThunk(bid)) }, []) //eslint-disable-line react-hooks/exhaustive-deps
    let orderClone = [...order];
    return (
        <>
            <ul className="list-group">
                {
                    loading && <li className="list-group-item">loading...</li>
                }
                {orderClone.reverse().slice(0, 3)
                    .map(order => <OrderItem key={order._id} order={order} />)}
            </ul>
        </>
    );
};
export default RecentOrderList;