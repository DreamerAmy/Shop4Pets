import React, { useEffect } from "react";
import { findSellerHistByIdThunk } from "../../../../services/SellerThunks";
import { useDispatch, useSelector } from "react-redux";

const SellRecordItem = ({ seller }) => {
    let pid = seller.productBought[0];
    pid = pid.substring(pid.length - 8, pid.length);

    return (
        <>
            {seller &&
                <li className="list-group-item d-flex">

                    <div className="p-2 col-md-3 ">{seller.date}</div>
                    <div className="p-2  col-md-3  ">{pid}</div>
                    <div className="p-2 col-md-3 ">{seller.receiver}</div>
                    <div className="p-2 col-md-3 ">{seller.address}</div>
                </li>
            }

        </>
    );
};
export default SellRecordItem;