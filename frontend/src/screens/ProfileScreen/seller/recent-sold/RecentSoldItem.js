import React from "react";
import { Link } from "react-router-dom";

const SoldItem = ({ seller }) => {
    let tempOrderId = parseInt(seller.orderId);
    let orderId = tempOrderId.substring(tempOrderId.length - 8, tempOrderId.length);
    let orderDate = seller.date;
    let totalAmount = seller.totalAmount;
    let viewOrderDetailsUrl = "../seller-view-detail/" + seller._id
    return (
        // TODO: Debug this section -> not showing details on the Seller's page(Recent Sold)
        <>
            <li className="list-group-item">
                <div className="p-2 col-3 ">{orderDate}</div>
                <div className="p-2 col-3 ">{orderId}</div>
                <div className="p-2 col-3 ">$ {totalAmount}</div>
                <div className="p-2 col-3 ">
                    <Link to={viewOrderDetailsUrl} className="nav-link" >
                        <button className="btn rounded-pill pt-1 align-baseline" id="allBtn-color">
                            View Details
                        </button>
                    </Link>
                </div>
            </li>

            {/*<Link to={viewOrderDetailsUrl} href="/" className="nav-link" >*/}
            {/*    <li className="list-group-item" >*/}
            {/*        <div className="row" >*/}
            {/*            <div className="col-4">*/}
            {/*                <div className="OrderHighlightText">Order #</div>*/}
            {/*                <div className="">{orderId}</div>*/}
            {/*            </div>*/}
            {/*            <div className="col-4">*/}
            {/*                <div className="OrderHighlightText">Date</div>*/}
            {/*                <div className="">{seller.date}</div>*/}
            {/*            </div>*/}
            {/*            <div className="col-4">*/}
            {/*                <div className="OrderHighlightText">Total</div>*/}
            {/*                <div className="">${seller.totalAmount}</div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </li >*/}
            {/*</Link>*/}
        </>
    );
};
export default SoldItem;