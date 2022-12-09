import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findOrderThunk } from "../../../../services/OrderThunks";
import AdminOrderItem from "./orderItem";


const AdminOrderList = () => {
    const { orderList, loading } = useSelector((state) => state.orderList)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findOrderThunk())
    }, []) //eslint-disable-line react-hooks/exhaustive-deps

    if (orderList && orderList.length > 0) {
        return (
            <>
                <ul className="list-group">
                    {
                        loading && <li className="list-group-item">loading...</li>
                    }
                    {orderList && orderList.map(order => <AdminOrderItem key={order._id} order={order} />)}
                </ul>
            </>
        );
    }
};
export default AdminOrderList;