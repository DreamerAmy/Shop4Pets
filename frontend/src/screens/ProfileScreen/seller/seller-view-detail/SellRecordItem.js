import React, { useEffect } from "react";

const SellRecordItem = ({ seller }) => {
    let pid = seller.productBought;
    pid = pid.substring(pid.length - 8, pid.length);

    return (
        <>
            {seller &&
                <li className="list-group-item d-flex">

                    <div className="p-2 col-md-2 ">{seller.date}</div>
                    <div className="p-2  col-md-3  ">{pid}</div>
                    <div className="p-2  col-md-2  ">{seller.productQuantity}</div>
                    <div className="p-2 col-md-3 ">{seller.receiver}</div>
                    <div className="p-2 col-md-3 ">{seller.address}</div>
                </li>
            }

        </>
    );
};
export default SellRecordItem;