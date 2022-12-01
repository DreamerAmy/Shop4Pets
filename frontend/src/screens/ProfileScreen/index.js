import BuyerProfileScreen from "./BuyerProfileScreen.js"
import OrderDetailScreen from "../FavoritesScreen.js"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { findUserByIdThunk } from "../../services/UserThunks";
import { findOrderByBuyerIdThunk } from "../../services/OrderThunks";
import './index.css';

function renderProfile(user) {
    if (user.accountType === "buyer") {
        return (<BuyerProfileScreen data={user} />)
    }
    else if (user.accountType === "seller") {
        return (<>seller</>);
    }
    else if (user.accountType === "admin") {
        return (<>admin</>);
    }
    return (
        <div>home page of current user...</div>
    )
}


const ProfileScreen = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const uid = paths[2];
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => { dispatch(findUserByIdThunk(uid)) }, []) //eslint-disable-line react-hooks/exhaustive-deps
    // useEffect(() => { dispatch(findOrderByBuyerIdThunk(user._id)) }, []) //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="row mt-2">
            <div className="col-2">
            </div>
            <div className="col-8" >
                {renderProfile(user)}
            </div>
            <div className="col-2">
            </div>
        </div >
    );
}


export default ProfileScreen;
