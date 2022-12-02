
import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findProductByIdThunk } from "../services/ProductThunks";

import "../screens/ProfileScreen/index.css";
import foodImage from "../images/food2.jpg"
// Display profile btn only user is logged in
const favoriteButton = (currentUser) => {
    let profileUrl = "../profile/";
    if (currentUser) {
        // profileUrl += currentUser._id;
        return (
            <button className="btn btn-default border" >
                <Link to={profileUrl} href="/" className="nav-link" >Add to favorite</Link>
            </button>
        )
    }
    return
}

const ProductScreen = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const pid = paths[2];
    let { productItem } = useSelector((state) => state.productItem)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(findProductByIdThunk(pid)) }, [])
    const { currentUser } = useSelector((state) => state.user);
    console.log(currentUser);
    let favList = [];
    if (currentUser) {
        favList = currentUser.favorites
        console.log(favList);
    }
    if (productItem && !Array.isArray(productItem)) {
        return (
            <>
                <div className="row mt-4">
                    <div className="col-2"></div>
                    <div className="col-3" >
                        <h2 className="">Product Detail</h2>
                        <img className="productImg" src={foodImage} alt="" />
                    </div>
                    <div className="col-5" >
                        <h3 className="mt-5">
                            {productItem.productName}
                        </h3>

                        <div className="productDescription">{productItem.description}</div>

                        <div className="productPrice">${productItem.price}</div>

                        {currentUser && favoriteButton(currentUser)}

                        {!currentUser && <div className="hint-text">Please SignIn to place an order or add to favorite list</div>}
                    </div>
                    <div className="col-2"></div>
                </div >
            </>
        )
    }
}

export default ProductScreen;

