import OrderHistoryItem from "../components/OrderHistoryComponent/OrderHistoryItem"
import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findOrderByIdThunk } from "../services/OrderThunks";
import ProfileBanner from "../components/ProfileBannerComponent.js"
import "../screens/ProfileScreen/index.css";


const OrderDetailScreen = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const oid = paths[2];
    let { orderItem, loading } = useSelector((state) => state.orderItem)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(findOrderByIdThunk(oid)) }, [])
    let backUrl = ""
    if (orderItem) {
        backUrl = "/profile/" + orderItem.buyerId;
    }
    return (
        <>
            <div className="row mt-2">
                <div className="col-2">
                </div>
                <div className="col-8" >
                    <ProfileBanner />
                    <h3 className="pt-3 pb-3">Order Detail</h3>
                    <ul className="list-group mt-2" >
                        {!loading && <OrderHistoryItem order={orderItem} />}
                    </ul>
                    <button className="btn btn-default" id="editBtn">
                        <Link to={backUrl} href="/" className="nav-link" >Back to Profile</Link>
                    </button>
                </div>
                <div className="col-2">
                </div>
            </div >

        </>
    )
}

export default OrderDetailScreen;