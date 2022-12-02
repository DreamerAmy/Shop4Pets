import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OrderDetailItem from "./OrderHistoryItem";
import { findOrderByBuyerIdThunk } from "../../services/OrderThunks";
import "../../screens/ProfileScreen/index.css";

const OrderHistoryList = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const bid = paths[2];
    const { order, loading } = useSelector((state) => state.order)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(findOrderByBuyerIdThunk(bid)) }, []) //eslint-disable-line react-hooks/exhaustive-deps
    let orderClone = [...order];
    return (
        <>
            <ul className="list-group mt-2" >
                {
                    loading && <li className="list-group-item">loading...</li>
                }
                {orderClone.reverse().map(order => <OrderDetailItem key={order._id} order={order} />)}
            </ul>
        </>
    );
};
export default OrderHistoryList;