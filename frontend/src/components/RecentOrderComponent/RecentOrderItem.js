import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../../screens/ProfileScreen/index.css";

const OrderItem = ({ order }) => {
    let orderId = order._id.substring(order._id.length - 8, order._id.length);
    return (
        <>
            <li className="list-group-item" >
                <div className="row" >
                    <div className="col-4">
                        <div className="OrderHighlightText">Order #</div>
                        <div className="">{orderId}</div>
                    </div>
                    <div className="col-4">
                        <div className="OrderHighlightText">Date</div>
                        <div className="">{order.date}</div>
                    </div>
                    <div className="col-4">
                        <div className="OrderHighlightText">Total</div>
                        <div className="">${order.totalAmount}</div>
                    </div>
                </div>
            </li >
        </>
    );
};
export default OrderItem;