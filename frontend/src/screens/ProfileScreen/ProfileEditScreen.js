import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { findUserByIdThunk } from "../../services/UserThunks";
import BuyerEditScreen from "./BuyerEditScreen.js"
import './index.css';

function renderEditScreen(user) {
    if (user.accountType === "buyer") {
        return (
            <BuyerEditScreen data={user} />
        )
    }
    else if (user.accountType === "seller") {
        return (<>seller edit screen</>);
    }
    else if (user.accountType === "admin") {
        return (<>admin edit screen</>);
    }
    return (
        <div>edit page of current user...</div>
    )
}

const ProfileEditScreen = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const uid = paths[2];
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(findUserByIdThunk(uid)) }, []) //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            {renderEditScreen(user)}
        </>
    );
}

export default ProfileEditScreen;
