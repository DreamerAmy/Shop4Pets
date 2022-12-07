import React, { useEffect } from "react";
import {findSellerHistByIdThunk} from "../../../../services/SellerThunks";
import {useDispatch, useSelector} from "react-redux";

function productArr(pidlist){
    let productList = [];
    for (var i = 0; i < pidlist.length; i++) {
        productList = pidlist[i].substring(pidlist[i].length - 8, pidlist[i].length);
    }
    return productList;
}

const SellRecordItem = ({seller}) => {
    console.log(seller)
    //TODO: substring productList(worked once)
    //const products = productArr(seller.productBought);
    return (
        <>
            {seller &&
                <li className="list-group-item d-flex">

                    <div className="p-2 col-md-3 ">{seller.date}</div>
                    <div className="p-2  col-md-3  ">{seller.productBought}</div>
                    <div className="p-2 col-md-3 ">{seller.receiver}</div>
                    <div className="p-2 col-md-3 ">{seller.address}</div>
                </li>
            }

        </>
    );
};
export default SellRecordItem;