import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const SellRecordItem = ({ seller }) => {
    let pid = seller.productBought;
    pid = pid.substring(pid.length - 8, pid.length);


    let buyerUrl = null;
    if (seller.buyerId != "0") {
        buyerUrl = "../profile/" + seller.buyerId
    }
    console.log("buyerUrl", buyerUrl);
    return (
        <>
            {seller &&
                <li className="list-group-item d-flex">

                    <div className="p-2 col-md-2 ">{seller.date}</div>
                    <div className="p-2  col-md-3  ">{pid}</div>
                    <div className="p-2  col-md-2  ">{seller.productQuantity}</div>
                    <div className="p-2 col-md-3 ">
                        {buyerUrl &&
                            <Link to={buyerUrl} href="/" className="nav-link" >
                                <Button className="px-4 btn btn-danger rounded-pill fw-bold">
                                    {seller.receiver}
                                </Button>
                            </Link>}
                        {!buyerUrl && seller.receiver}
                    </div>
                    <div className="p-2 col-md-3 ">{seller.address}</div>
                </li>
            }

        </>
    );
};
export default SellRecordItem;