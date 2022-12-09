import React from "react";
import { useDispatch } from "react-redux";
import { deleteProductThunk } from "../../../../services/ProductThunks";

const SellerItem = ({ product }) => {
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
                    <div className="p-2 col-2 "> {pid.substring(pid.length - 8, pid.length)} </div>
                    <div className="p-2 col-2 "> {product.productName} </div>
                    <div className="p-2 col-2 "> {product.description} </div>
                    <div className="p-2 col-2 "> {product.price} </div>
                    <div className="p-2 col-2 "> {product.unitSold} </div>
                    <div className="p-2 col-2 "> {product.unitInStock}</div>
                </li>
            }

        </>
    );
};
export default SellerItem;