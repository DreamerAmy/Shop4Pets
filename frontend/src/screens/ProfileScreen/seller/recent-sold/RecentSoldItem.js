import React from "react";
import { Link } from "react-router-dom";

const SoldItem = ({ seller }) => {
    let sellerHistId = seller._id.substring(seller._id.length - 8, seller._id.length);
    let orderDate = seller.date;
    let orderAmount = seller.productQuantity;
    let shid = seller._id;
    let viewOrderDetailsUrl = "../seller-view-detail/" + shid
    return (
        <>
            <li className="list-group-item d-flex">
                    <div className="p-2 col-md-3 ">{orderDate}</div>
                    <div className="p-2  col-md-3  ">{sellerHistId}</div>
                    <div className="p-2 col-md-3 ">{orderAmount}</div>
                    <div className="p-2 col-md-3 ">
                        <Link to={viewOrderDetailsUrl} className="nav-link" >
                            <button className="btn rounded-pill pt-1 align-baseline" id="allBtn-color">
                                View Details
                            </button>
                        </Link>
                    </div>
            </li>
        </>
    );
};
export default SoldItem;