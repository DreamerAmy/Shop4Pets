import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findUserByIdThunk, updateUserThunk } from "../services/UserThunks";
import { findProductByIdThunk } from "../services/ProductThunks";

const UpdateFavComponent = ({ uid, pid }) => {
    let { user } = useSelector((state) => state.user);
    let { productItem } = useSelector((state) => state.productItem)
    const dispatch = useDispatch()
    useEffect(() => { dispatch(findUserByIdThunk(uid)) }, [])
    useEffect(() => { dispatch(findProductByIdThunk(pid)) }, [])
    console.log("user", user);
    console.log("productItem", productItem);

    if (user && !Array.isArray(user) && productItem && !Array.isArray(productItem)) {
        let favBoolean = user.favorites.includes(productItem._id);
        console.log("favBoolean", favBoolean);
        if (favBoolean) {
            let index = user.favorites.indexOf(productItem._id);
            let removedArray = [...user.favorites];
            removedArray.splice(index, 1);
            dispatch(updateUserThunk({
                ...user,
                favorites: removedArray,
            }));

            return (<>Removed!</>)

        } else {
            dispatch(updateUserThunk({
                ...user,
                favorites: [...user.favorites, productItem._id],
            }));
            return (<>Added!</>)
        }
    }
}

export default UpdateFavComponent