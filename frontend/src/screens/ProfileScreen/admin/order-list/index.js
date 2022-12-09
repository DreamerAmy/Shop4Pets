import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {findOrderThunk} from "../../../../services/OrderThunks";
import AdminOrderItem from "./orderItem";


const AdminOrderList = () => {
    const { order, loading } = useSelector((state) => state.order)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(findOrderThunk()) }, []) //eslint-disable-line react-hooks/exhaustive-deps

    console.log(order)
    if (order && order!== []){
        return (
            <>
                <ul className="list-group">
                    {
                        loading && <li className="list-group-item">loading...</li>
                    }
                    {order && order.map(order => <AdminOrderItem key={order._id} order={order} />)}
                </ul>
            </>
        );
    }
};
export default AdminOrderList;