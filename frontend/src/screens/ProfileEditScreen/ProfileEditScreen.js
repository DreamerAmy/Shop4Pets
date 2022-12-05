import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { findUserByIdThunk } from "../../services/UserThunks";
import BuyerEditScreen from "./BuyerEditScreen.js"
import "../ProfileScreen/index.css";

// function renderEditScreen(user) {
//     if (user.accountType === "buyer" || user.accountType === "seller" || user.accountType === "admin") {
//         return (
//             <BuyerEditScreen data={user} />
//         )
//     }
//     return (
//         <div>edit page of current user...</div>
//     )
// }

const ProfileEditScreen = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const uid = paths[2];
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(findUserByIdThunk(uid)) }, []) //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="row mt-2">
            <div className="col-2">
            </div>
            <div className="col-8" >
                <BuyerEditScreen data={user} />
                {/*{renderEditScreen(user)}*/}
            </div>
            <div className="col-2">
            </div>
        </div >
    );
}

export default ProfileEditScreen;

