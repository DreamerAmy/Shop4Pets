
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findProductByIdThunk } from "../services/ProductThunks";
import { findUserByIdThunk, updateUserThunk } from "../services/UserThunks";
import "../screens/ProfileScreen/index.css";
import foodImage from "../images/food2.jpg"
import UpdateFavComponent from "../components/UpdateFavComponent";

const ProductScreen = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const pid = paths[2];
    let { productItem } = useSelector((state) => state.productItem)
    let { currentUser } = useSelector((state) => state.user);

    const dispatch = useDispatch()
    useEffect(() => { dispatch(findProductByIdThunk(pid)) }, [])

    return (
        <>
            <div className="row mt-4">
                <div className="col-2"></div>
                <div className="col-3" >
                    <h2 className="">Product Detail</h2>
                    <img className="productImg" src={foodImage} alt="" />
                </div>
                <div className="col-5" >
                    {productItem &&
                        <>
                            <h3 className="mt-5"> {productItem.productName}</h3>
                            <div className="productDescription"> {productItem.description}</div>
                            <div className="productPrice"> ${productItem.price}</div>
                            {currentUser && <UpdateFavComponent uid={currentUser._id} pid={productItem._id} />}
                        </>
                    }

                </div>
                <div className="col-2"></div>
            </div >
        </>
    )



}

export default ProductScreen;

