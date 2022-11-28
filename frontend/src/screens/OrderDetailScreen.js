import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findOrderByIdThunk } from "../services/OrderThunks";
import { findUserByIdThunk } from "../services/UserThunks";
import React, { useEffect } from "react";
import ProfileBanner from "../components/ProfileBannerComponent.js"
import "./ProfileScreen/index.css";


const OrderDetailScreen = (data) => {
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const oid = paths[2];
    const navigate = useNavigate();
    const { order } = useSelector((state) => state.order)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(findOrderByIdThunk(oid)) }, []) //eslint-disable-line react-hooks/exhaustive-deps
    console.log("order.buyerId", order.buyerId);

    const { user } = useSelector((state) => state.user)
    // useEffect(() => { dispatch(findUserByIdThunk(order.buyerId)) }, []) //eslint-disable-line react-hooks/exhaustive-deps
    const backUrl = "../order-history/" + order.buyerId;
    console.log("backUrl", backUrl);
    console.log("user", user);
    // const navigate = useNavigate();
    return (
        <div className="row mt-2">
            <div className="col-2">
            </div>
            <div className="col-8" >
                <ProfileBanner />
                <div className="pt-2">
                    <button className="btn btn-default" id="editBtn" onClick={() => { navigate(backUrl) }}>
                        back
                        {/* <Link to={backUrl} href="/" className="nav-link" >Back to Order History</Link> */}
                    </button>
                </div>
            </div>
            <div className="col-2">
            </div>
        </div >
    );
}

export default OrderDetailScreen;