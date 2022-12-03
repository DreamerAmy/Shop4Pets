import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import ProfileBanner from "../../components/ProfileBannerComponent.js"
import RecentOrderList from "../../components/RecentOrderComponent/RecentOrderList"
import { findOrderByBuyerIdThunk } from "../../services/OrderThunks";
import './index.css';

const BuyerProfileScreen = (user) => {
    let navigate = useNavigate();
    const buyer = user.data;
    const bid = buyer._id;

    const { order } = useSelector((state) => state.order)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(findOrderByBuyerIdThunk(user.data._id)) }, []) //eslint-disable-line react-hooks/exhaustive-deps
    const { currentUser } = useSelector((state) => state.user);

    const orderHistoryUrl = "../order-history/" + bid;
    const favUrl = "../favorites/" + bid;
    const editUrl = "../edit-profile/" + bid;

    const orderNum = order.length;
    const favNum = buyer.favorites.length;

    const routeToMyProfile = () => {
        let myProfileUrl = "../profile/" + currentUser._id;
        navigate(myProfileUrl);
        window.location.reload(false)
    }

    const routeToSignIn = () => {
        navigate("../login/");
        window.location.reload(false)
    }

    // Case that you are reviewing profile of yourselves
    // Full information will be displayed
    if (currentUser && currentUser._id === buyer._id) {
        return (
            <>
                <h5>You have signed in! Welcome back!</h5>
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

                <div className="pb-2" id="RecentOrderSection">
                    <h3 className="highlight-text">Recent Orders</h3>
                    <RecentOrderList bid={bid} />
                </div>

            </>
        )
    }

    return (
        <>
            <h5>You are viewing other's profile...</h5>
            <ProfileBanner />
            <div id="infoSection">
                <h2 className="highlight-text">{buyer.name}</h2>
                <i className="bi bi-envelope"></i>*hidden*<br />
                <i className="bi bi-phone"></i>*hidden*<br />
                <i className="bi bi-house-door"></i>*hidden*<br />
                <i className="bi bi-balloon"></i>Member Since {buyer.memberSince}<br />
                <i className="bi bi-bag-heart"></i>{orderNum} Order History<br />
                <i className="bi bi-star"></i>{favNum} Favorites<br />
            </div>
            <h6>Some private sections have been hidden.</h6>
            {
                currentUser &&
                <Button className="px-4 btn btn-danger rounded-pill fw-bold"
                        onClick={routeToMyProfile}>
                    Back to your profile
                </Button>
            }
            {
                !currentUser &&
                <Button className="px-4 btn btn-danger rounded-pill fw-bold"
                        onClick={routeToSignIn}>
                    Sign In
                </Button>
            }
        </>)
}

export default BuyerProfileScreen;

