import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../../screens/ProfileScreen/index.css";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
    const subtotal = Math.round(product.price * product.quantitySold * 100) / 100;
    let productUrl = "../product/" + product._id
    return (
        <>
            <Link to={productUrl} href="/" className="nav-link" >
                <li className="list-group-item" >
                    <div className="row" >
                        <div className="col-4">
                            <div className="OrderHighlightText">Item</div>
                            <div className="">{product.productName}</div>
                        </div>
                        <div className="col-2">
                            <div className="OrderHighlightText">Quantity</div>
                            <div className="">{product.quantitySold}</div>
                        </div>
                        <div className="col-2">
                            <div className="OrderHighlightText">Unit Price</div>
                            <div className="">${product.price}</div>
                        </div>
                        <div className="col-3">
                            <div className="OrderHighlightText">Item(s) Subtotal</div>
                            <div className="">${subtotal}</div>
                        </div>
                    </div>
                </li >
            </Link>
        </>
    );
};
export default ProductItem;