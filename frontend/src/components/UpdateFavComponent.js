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

    function removeFav() {
        let index = user.favorites.indexOf(productItem._id);
        let removedArray = [...user.favorites];
        removedArray.splice(index, 1);
        dispatch(updateUserThunk({
            ...user,
            favorites: removedArray,
        }));
        window.alert('removed fav!')
        console.log("remove fav function")
        window.location.reload(false)
    }


    function addFav() {
        dispatch(updateUserThunk({
            ...user,
            favorites: [...user.favorites, productItem._id],
        }));
        console.log("add fav function")
        window.alert('add to fav!')
        window.location.reload(false)

    }

    if (user && !Array.isArray(user) && productItem && !Array.isArray(productItem)) {
        let favBoolean = user.favorites.includes(productItem._id);
        console.log("favBoolean", favBoolean);
        if (favBoolean) {
            return (
                <button className="btn btn-default" id="editBtn" onClick={removeFav} >
                    remove Fav Button
                </button>
            )
        } else {
            return (
                <button className="btn btn-default" id="editBtn" onClick={addFav} >
                    add Fav Button
                </button>)
        }
    }
}

export default UpdateFavComponent