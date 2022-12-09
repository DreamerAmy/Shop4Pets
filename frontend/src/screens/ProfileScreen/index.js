import BuyerProfileScreen from "./BuyerProfileScreen.js"
import React, { useEffect } from "react";
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { findUserByIdThunk } from "../../services/UserThunks";
import './index.css';
import SellerProfileScreen from "./seller/SellerProfileScreen";
import AdminProfileScreen from "./AdminProfileScreen";

function renderProfile(user) {
    if (user.accountType === "buyer") {
        return (<BuyerProfileScreen data={user} />)
    }
    else if (user.accountType === "seller") {
        return (<SellerProfileScreen data={user}/>);
    }
    else if (user.accountType === "admin") {
        return (<AdminProfileScreen data={user}/>);
    }
    return (
        <div>
            <i className="bi bi-wifi-off pe-3"></i>
            Please Sign in to display your home profile
        </div>
    )
}

function renderFailMessage() {
    return (
        <h2>
            <i className="bi bi-wifi-off pe-3"></i>
            Please Sign in to display your home profile
        </h2>
    )
}

const ProfileScreen = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    let uid = paths[2];
    // Current User = LoggedIn User
    const { currentUser } = useSelector((state) => state.user);

    // User = user id from the url path, can be null
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        // // no userId in path, no LoggedIn user => no data, do nothing
        if (!uid && !currentUser) { return; }
        dispatch(findUserByIdThunk(uid))
    }, []) //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="row mt-2">
            <div className="col-2">
            </div>
            <div className="col-8" >
                {!uid && currentUser && renderProfile(currentUser)}
                {uid && user && renderProfile(user)}
                {!uid && !currentUser && renderFailMessage()}
            </div>
            <div className="col-2">
            </div>
        </div >
    );
}


export default ProfileScreen;
