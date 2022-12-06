
// import { Link, useLocation } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { findProductByIdThunk } from "../services/ProductThunks";
// import "../screens/ProfileScreen/index.css";
// import foodImage from "../images/food2.jpg"
// import UpdateFavComponent from "../components/UpdateFavComponent";


const ProductBlankScreen = () => {
    return (
        <>
            <div className="row mt-4">
                <div className="col-2"></div>
                <div className="col-8">
                    <div>

                        <img className="img-fluid mt-1 mb-4"
                            src={require("../images/HomeBanner.png")}
                            alt="Home banner" />
                        <h6>Hint: Add product_id to the link to navigate to a specific product</h6>
                    </div>
                </div>
                <div className="col-2"></div>
            </div >
        </>
    )
}



export default ProductBlankScreen;

