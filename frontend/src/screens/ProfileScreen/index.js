import BuyerProfileScreen from "./BuyerProfileScreen.js"
import OrderDetailScreen from "../FavoritesScreen.js"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { findUserByIdThunk } from "../../services/UserThunks";
import { findOrderByBuyerIdThunk } from "../../services/OrderThunks";
import './index.css';

function renderProfile(uid, currentUser, user, loading, userLoading) {
    if (!loading) {
        loading = true;
        userLoading = true;
        if (user && user.accountType === "buyer") {
            return (<BuyerProfileScreen data={user} />)
        }
        else if (user && user.accountType === "seller") {
            return (<>seller</>);
        }
        else if (user && user.accountType === "admin") {
            return (<>admin</>);
        }
        return (
            <div>Please Login to display your profile</div>
        )
    }
}

function renderLoggedInProfile(currentUser, loading) {
    if (!loading) {
        if (currentUser && currentUser.accountType === "buyer") {
            return (<BuyerProfileScreen data={currentUser} />)
        }
        else if (currentUser && currentUser.accountType === "seller") {
            return (<>seller</>);
        }
        else if (currentUser && currentUser.accountType === "admin") {
            return (<>admin</>);
        }
    }
    return (
        <div>Loading...</div>
    )
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
        // no userid in path, not logged in=> do not 
        if (!uid && !currentUser) {
            return;
        }


        if (!loading && !uid) {
            console.log("uid replaced by loggedin user");
            uid = currentUser._id;
        }

        dispatch(findUserByIdThunk(uid))

    }, []) //eslint-disable-line react-hooks/exhaustive-deps

    // console.log("currentUser", currentUser, loading);
    // console.log("user", user, userLoading);

    if (!uid) {
        return (<>
            <div className="row mt-2">
                <div className="col-2">
                </div>
                <div className="col-8" >
                    {renderLoggedInProfile(currentUser, loading)}
                </div>
                <div className="col-2">
                </div>
            </div >
        </>)
    }

    return (
        <div className="row mt-2">
            <div className="col-2">
            </div>
            <div className="col-8" >
                {renderProfile(uid, currentUser, user, loading, userLoading)}
            </div>
            <div className="col-2">
            </div>
        </div >
    );
}


export default ProfileScreen;
