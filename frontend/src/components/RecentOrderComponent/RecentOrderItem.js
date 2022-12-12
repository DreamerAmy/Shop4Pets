import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../../screens/ProfileScreen/index.css";
import { Link } from "react-router-dom";

const OrderItem = ({ order }) => {
    let orderId = order._id.substring(order._id.length - 6, order._id.length);
    let orderUrl = "../order-detail/" + order._id
    return (
        <>
            <Link to={orderUrl} href="/" className="nav-link" >
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
            </Link>
        </>
    );
};
export default OrderItem;