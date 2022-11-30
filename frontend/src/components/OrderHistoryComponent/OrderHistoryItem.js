import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../../screens/ProfileScreen/index.css";
import ProductList from "../ProductComponent/ProductList";
// import ProductList from "../ProductComponent/ProductList";
import { findProductByIdThunk } from "../../services/ProductThunks";
// create a json with purchased product id and quantity


const OrderDetailItem = ({ order }) => {
    let orderId = order._id.substring(order._id.length - 8, order._id.length);
    let creditCardNumber = order.creditCardNumber.substring(order.creditCardNumber.length - 4, order.creditCardNumber.length);

    return (
        <>
            <li className="list-group-item  list-group-item-warning mb-4 border" >
                <div className="row" >
                    <div className="col-4">
                        <div className="OrderHighlightText">Order #</div>
                        <div className="">{orderId}</div>
                        <div className="OrderHighlightText">Address</div>
                        <div className="">{order.address}</div>
                    </div>
                    <div className="col-4">
                        <div className="OrderHighlightText">Date</div>
                        <div className="">{order.date}</div>
                        <div className="OrderHighlightText">Receiver</div>
                        <div className="">{order.receiver}</div>
                    </div>
                    <div className="col-4">
                        <div className="OrderHighlightText">Total</div>
                        <div className="">${order.totalAmount}</div>
                        <div className="OrderHighlightText">Payment Method</div>
                        <div className="">Ending in {creditCardNumber}</div>
                    </div>
                    <ProductList order={order} />
                </div>
            </li >
        </>
    );
};
export default OrderDetailItem;