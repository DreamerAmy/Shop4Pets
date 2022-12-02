
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findProductByIdThunk } from "../services/ProductThunks";
import { findUserByIdThunk, updateUserThunk } from "../services/UserThunks";


import "../screens/ProfileScreen/index.css";
import foodImage from "../images/food2.jpg"
// // Display profile btn only user is logged in
// const toFavBtn = (currentUser) => {
//     let profileUrl = "../profile/";
//     if (currentUser) {
//         return (
//             <>
//                 <h6>Hey {currentUser.name}</h6>
//                 <button className="btn btn-default border" >
//                     <Link to={profileUrl} href="/" className="nav-link" >Add to favorite</Link>
//                 </button>
//             </>
//         )
//     }
//     return
// }

// const FavBtn = (currentUser, productItem) => {
//     const index = currentUser.favorites.indexOf(productItem._id);
//     const removedArray = currentUser.favorites.splice(index, 1);
//     if (currentUser) {
//         return (
//             <>
//                 <h6>Hey {currentUser.name}</h6>
//                 <button className="btn btn-default border" onClick={(event) => setInfo({ ...info, favorites: removedArray })}>
//                     Remove favorite
//                 </button>
//             </>
//         )
//     }
//     return
// }



const ProductScreen = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const pid = paths[2];
    let { productItem } = useSelector((state) => state.productItem)
    let { currentUser } = useSelector((state) => state.user);
    let { user } = useSelector((state) => state.user);
    const [buttonText, setButtonText] = useState('Click');
    let userId = currentUser._id;
    const dispatch = useDispatch();
    useEffect(() => { dispatch(findProductByIdThunk(pid)) }, [])
    useEffect(() => { dispatch(findUserByIdThunk(userId)) }, [])


    console.log("currentUser", currentUser);
    console.log("user", user)
    function LikedIcon({ user, productItem }) {
        let favList = user.favorites
        // let favBoolean = false;

        console.log("favList.length", favList.length);
        console.log("favList.includes", favList.includes(productItem._id));
        // if (favList.includes(productItem._id)) {
        //     favBoolean = true;
        // }
        // if (user.name === currentUser.name) {
        if (favList.includes(productItem._id)) {
            let index = user.favorites.indexOf(productItem._id);
            let removedArray = [...user.favorites];
            removedArray.splice(index, 1);
            console.log("remove", productItem._id, "from fav")
            return (
                <button
                    onClick={() => {
                        dispatch(updateUserThunk({
                            ...user,
                            favorites: removedArray,
                        }));
                        // window.location.reload(false);
                    }}
                >
                    {buttonText}
                </button >
            )
        }

        let addedArray = [...currentUser.favorites, productItem._id];
        console.log("addedArray", addedArray.length)
        return (
            <button
                onClick={() => {
                    setButtonText("un-favorite!")
                    dispatch(updateUserThunk({
                        ...currentUser,
                        favorites: addedArray,
                    }));
                    // window.alert("add to fav");
                    // window.location.reload(false)
                }}
            >
                un-favorite
            </button >
        )
        // }
    }

    if (user && !Array.isArray(user) && productItem && !Array.isArray(productItem)) {
        return (
            <>
                <div className="row mt-4">
                    <div className="col-2"></div>
                    <div className="col-3" >
                        <h2 className="">Product Detail</h2>
                        <img className="productImg" src={foodImage} alt="" />
                    </div>
                    <div className="col-5" >
                        <h3 className="mt-5">
                            {productItem.productName}
                        </h3>

                        <div className="productDescription">{productItem.description}</div>

                        <div className="productPrice">${productItem.price}</div>
                        {!currentUser && <div className="hint-text">Please SignIn to place an order or add to favorite list</div>}
                        {/* {currentUser && !favBoolean && toFavBtn(currentUser, productItem)} */}

                        {currentUser && user && !Array.isArray(user) && LikedIcon({ currentUser, user, productItem })}


                    </div>
                    <div className="col-2"></div>
                </div >
            </>
        )
    }
}

export default ProductScreen;

