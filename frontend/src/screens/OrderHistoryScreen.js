import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findUserByIdThunk } from "../services/UserThunks";
import { findOrderByBuyerIdThunk } from "../services/OrderThunks";
import React, { useEffect } from "react";
import ProfileBanner from "../components/ProfileBannerComponent.js"
import OrderHistoryList from "../components/OrderHistoryComponent/OrderHistoryList"
import "./ProfileScreen/index.css";

const OrderHistoryScreen = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const bid = paths[2];

    let { user } = useSelector((state) => state.user)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(findUserByIdThunk(bid)) }, []) //eslint-disable-line react-hooks/exhaustive-deps
    if (!user) {
        user = JSON.parse(sessionStorage.getItem('currentUser'))
    }
    const backUrl = "/profile/" + bid;

    const { order } = useSelector((state) => state.order)
    useEffect(() => { dispatch(findOrderByBuyerIdThunk(bid)) }, []) //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="row mt-2">
            <div className="col-2">
            </div>
            <div className="col-8" >
                <ProfileBanner />
                <div className="pt-2">
                    <button className="btn btn-default" id="editBtn">
                        <Link to={backUrl} href="/" className="nav-link" >Back to Profile</Link>
                    </button>
                    <h2 className="highlight-text">{user.name}'s Order History<br /></h2>
                    <OrderHistoryList bid={bid} />
                </div>
            </div>
            <div className="col-2">
            </div>
        </div >
    );
}

export default OrderHistoryScreen;