import BuyerProfileScreen from "./BuyerProfileScreen.js"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { findUserByIdThunk } from "../../services/UserThunks";
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
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(findUserByIdThunk(uid)) }, []) //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            {renderProfile(user)}
        </>
    );
}


export default ProfileScreen;

