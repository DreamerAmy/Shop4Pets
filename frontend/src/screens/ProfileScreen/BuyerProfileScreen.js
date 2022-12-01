import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ProfileBanner from "../../components/ProfileBannerComponent.js"
import RecentOrderList from "../../components/RecentOrderComponent/RecentOrderList"
import { findOrderByBuyerIdThunk } from "../../services/OrderThunks";
import './index.css';

const BuyerProfileScreen = (user) => {
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const bid = paths[2];
    const buyer = user.data;
    const editUrl = "../edit-profile/" + bid;
    const orderHistoryUrl = "../order-history/" + bid;
    const favUrl = "../favorites/" + bid;
    const { order } = useSelector((state) => state.order)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(findOrderByBuyerIdThunk(user.data._id)) }, []) //eslint-disable-line react-hooks/exhaustive-deps
    const orderNum = order.length;
    const favNum = buyer.favorites.length;

    return (
        <>
            <ProfileBanner />
            <div id="infoSection">
                <button className="btn btn-default" id="editBtn">
                    <Link to={editUrl} href="/" className="nav-link" >Edit</Link>
                </button>
                <h2 className="highlight-text">{buyer.name}</h2>
                <i className="bi bi-envelope"></i>{buyer.email}<br />
                <i className="bi bi-phone"></i>{buyer.phone}<br />
                <i className="bi bi-house-door"></i>{buyer.address}<br />
                <i className="bi bi-balloon"></i>Member Since {buyer.memberSince}<br />
            </div>

            <div className="grid-container" id="BuyerSummarySection">
                <Link to={orderHistoryUrl} href="/" className="nav-link" >
                    <div className="grid-item" id="OrderHistory">
                        <i className="bi bi-bag-heart-fill"></i>
                        {orderNum} Order History
                    </div>
                </Link>

                <Link to={favUrl} href="/" className="nav-link" >
                    <div className="grid-item">
                        <i className="bi bi-star-fill"></i>
                        {favNum} Favorites
                    </div>
                </Link>
            </div>

            <div className="pb-5" id="RecentOrderSection">
                <h3 className="highlight-text">Recent Orders</h3>
                <RecentOrderList bid={bid} />
            </div>
        </>
    )
}

export default BuyerProfileScreen;

