import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ProfileBanner from "./ProfileBanner.js"
import { findBuyerByIdThunk } from "../../services/BuyerThunks";
import './index.css';

const BuyerProfileScreen = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const bid = paths[3];
    const { buyer, loading } = useSelector((state) => state.buyer)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(findBuyerByIdThunk(bid)) }, []) //eslint-disable-line react-hooks/exhaustive-deps
    // TODO: if profile has no buyer id, display current loggedin user profile
    const editUrl = "./edit-profile/" + bid;
    return (
        <div className="row mt-2">
            <div className="col-3">
                left
            </div>
            <div className="col-6" >
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
                    {/* todo: add order history & favorites page */}
                    <Link to="/profile/buyer/" href="/" className="nav-link" >
                        <div className="grid-item" id="OrderHistory">
                            <i className="bi bi-bag-heart-fill"></i>
                            {buyer.order} Order History
                        </div>
                    </Link>

                    <Link to="/profile/buyer/" href="/" className="nav-link" >
                        <div className="grid-item">
                            <i className="bi bi-star-fill"></i>
                            {buyer.favorites} Favorites
                        </div>
                    </Link>
                </div>


                <div id="RecentOrderSection">
                    <h3 className="highlight-text">Recent Orders</h3>
                </div>

            </div>
            <div className="col-3">
                right
            </div>
        </div>

    )
}

export default BuyerProfileScreen;

