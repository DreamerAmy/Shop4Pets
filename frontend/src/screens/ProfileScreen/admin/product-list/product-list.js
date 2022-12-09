import React from "react";
import {useDispatch} from "react-redux";
import {deleteProductThunk} from "../../../../services/ProductThunks";

const ProductList = ({ product }) => {
    let pid = product._id;


    const dispatch = useDispatch();
    const deleteProductHandler = (id) => {
        dispatch(deleteProductThunk(id));
    }

    return (
        <>
            {product &&
                <li className="list-group-item d-flex">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteProductHandler(pid)}></i>
                    <div className="p-2 col-2 ">{pid.substring(pid.length - 8, pid.length)}</div>
                    <div className="p-2 col-1 ">{product.category}</div>
                    <div className="p-2 col-2 ">{product.productName}</div>
                    <div className="p-2 col-2 ">{product.brand}</div>
                    <div className="p-2 col-2 ">{product.sellerId.substring(product.sellerId.length - 8, product.sellerId.length)}</div>
                    <div className="p-2 col-1 ">{product.price}</div>
                    <div className="p-2 col-1 ">{product.unitInStock}</div>
                    <div className="p-2 col-1 ">{product.unitSold}</div>
                </li>
            }

        </>
    );
};
export default ProductList;