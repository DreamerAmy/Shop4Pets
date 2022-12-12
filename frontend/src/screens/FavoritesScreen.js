import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductThunk } from "../services/ProductThunks";
import { findUserByIdThunk } from "../services/UserThunks";
import React, { useEffect } from "react";
import ProfileBanner from "../components/ProfileBannerComponent.js"
import FavProductList from "../components/FavProductComponent/FavProductList.js"
import "./ProfileScreen/index.css";

function BuildFavList(product, pidList) {
    let favList = [];
    for (const element of product) {
        for (let j = 0; j < pidList.length; j++) {
            if (pidList[j] === element._id) {
                let temp = Object.assign({}, element);
                favList = [...favList, temp];
            }
        }
    }
    return favList;
}

const FavoritesScreen = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const bid = paths[2];
    const { user, userLoading } = useSelector((state) => state.user)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(findUserByIdThunk(bid)) }, []) //eslint-disable-line react-hooks/exhaustive-deps
    const backUrl = "/profile/" + bid;
    const { product, loading } = useSelector((state) => state.product)
    useEffect(() => { dispatch(findProductThunk(bid)) }, []) //eslint-disable-line react-hooks/exhaustive-deps
    let favList = [];
    if (user && !Array.isArray(user) && !loading && !userLoading) {
        favList = BuildFavList(product, user.favorites);
    }
    return (
        <div className="row mt-2">
            <div className="col-2">
            </div>
            <div className="col-8" >
                <ProfileBanner />
                <div className="pt-2">
                    <button className="btn btn-default" id="editBtn">
                        <Link to={backUrl} href="/" className="nav-link" >Back to Profile</Link>
                    </button>
                    <h2 className="highlight-text">Favorite Items List<br /></h2>
                    <FavProductList productList={favList} />
                </div>
            </div>
            <div className="col-2">
            </div>
        </div >
    );
}

export default FavoritesScreen;