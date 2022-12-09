import React from "react";
import { deleteOrderThunk } from "../../../../services/OrderThunks";
import { useDispatch } from "react-redux";

const AdminOrderItem = ({ order }) => {
    let oid = order._id;
    oid = oid.substring(oid.length - 8, oid.length);

    const dispatch = useDispatch();
    const deleteOrderHandler = (id) => {
        dispatch(deleteOrderThunk(id));
    }

    return (
        <>
            {order &&
                <li className="list-group-item d-flex">
                    <i className="bi bi-x-lg float-end"
                        onClick={() => deleteOrderHandler(order._id)}></i>
                    <div className="p-2 col-3 "> {oid} </div>
                    <div className="p-2 col-3 "> {order.productBought.length + 1} </div>
                    <div className="p-2 col-3 "> {order.receiver} </div>
                    <div className="p-2 col-3 ">{order.totalAmount}</div>
                </li>
            }
        </>
    )
}

export default AdminOrderItem;