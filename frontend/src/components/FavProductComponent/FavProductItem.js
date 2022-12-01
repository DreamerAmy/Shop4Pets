import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../../screens/ProfileScreen/index.css";

const FavProductItem = ({ product }) => {
    return (
        <>
            <li className="list-group-item  list-group-item-warning " >
                <div className="row" >
                    <div className="col-4">
                        <div className="OrderHighlightText">Item Name</div>
                        <div className="">{product.productName}</div>
                    </div>
                    <div className="col-6">
                        <div className="OrderHighlightText">Description</div>
                        <div className="">{product.description}</div>
                    </div>
                    <div className="col-2">
                        <div className="OrderHighlightText">Unit Price</div>
                        <div className="">${product.price}</div>
                    </div>
                </div>
            </li >
        </>
    );
};
export default FavProductItem;