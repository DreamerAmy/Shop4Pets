import BuyerProfileScreen from "./BuyerProfileScreen.js"
import OrderDetailScreen from "../FavoritesScreen.js"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { findUserByIdThunk } from "../../services/UserThunks";
import { findOrderByBuyerIdThunk } from "../../services/OrderThunks";
import './index.css';

function renderProfile(currentUser, user, loading, userLoading) {
    console.log("loading", loading);
    console.log("userLoading", userLoading);
    if (!loading) {
        console.log(!loading && !userLoading);
        loading = true;
        userLoading = true;
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
            <div>Please Login to display your profile</div>
        )
    }
}


const ProfileScreen = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    let uid = paths[2];

    // const { currentUser } = useSelector((state) => state.user)
    // console.log("profile screen ", currentUser)



    const { currentUser, loading } = useSelector((state) => state.user);
    const { user, userLoading } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {

        if (!uid && !currentUser) {
            return;
        }
        if (loading && !uid) {
            console.log("uid replaced by loggedin user");
            uid = currentUser._id;
        }

        dispatch(findUserByIdThunk(uid))

    }, []) //eslint-disable-line react-hooks/exhaustive-deps

    console.log("currentUser", currentUser, loading);
    console.log("user", user, userLoading);
    // useEffect(() => { dispatch(findOrderByBuyerIdThunk(user._id)) }, []) //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="row mt-2">
            <div className="col-2">
            </div>
            <div className="col-8" >
                {renderProfile(currentUser, user, loading, userLoading)}
            </div>
            <div className="col-2">
            </div>
        </div >
    );
}


export default ProfileScreen;
