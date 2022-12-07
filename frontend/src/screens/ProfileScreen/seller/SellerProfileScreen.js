import React, {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findOrderByBuyerIdThunk} from "../../../services/OrderThunks";
import ProfileBanner from "../../../components/ProfileBannerComponent";
import {Button} from "react-bootstrap";
import { findSellerHistBySellerIdThunk } from "../../../services/SellerThunks";
import RecentSoldList from "./recent-sold";


const SellerProfileScreen = (user) => {
    let navigate = useNavigate();

    const seller = user.data;
    const sid = seller._id;
    const editUrl = "../edit-profile/" + sid;

    const dispatch = useDispatch();
    useEffect(() => { dispatch(findSellerHistBySellerIdThunk(user.data._id)) }, []) //eslint-disable-line react-hooks/exhaustive-deps
    const { currentUser } = useSelector((state) => state.user);
    const viewOrderDetailsUrl = "../view-orderDetails/" + sid;
    const viewMyProductsUrl = "../view-myProducts/" + sid;
    const viewMyProfitUrl = "../view-myProfit" + sid;

    const routeToMyProfile = () => {
        let myProfileUrl = "../profile/" + currentUser._id;
        navigate(myProfileUrl);
        window.location.reload(false)
    }

    const routeToSignIn = () => {
        navigate("../login/");
        window.location.reload(false)
    }
    if (currentUser && currentUser._id === sid) {
        return (
            <div className="font-setting" id="profileScreen">

                <div id="infoSection">
                    <div className="float-end list-group pt-5">
                        <button className="btn list-group-item rounded-pill" id="menuBtn">
                            <Link to={viewMyProductsUrl} href="#" className="nav-link" >My Products</Link>
                        </button>

                        <button className="btn list-group-item rounded-pill" id="menuBtn">
                            <Link to={viewMyProfitUrl} href="#" className="nav-link" >My Profit
                            </Link>
                        </button>

                        <button className="btn list-group-item" id="editBtn">
                            <Link to={editUrl} href="#" className="nav-link" >Edit</Link>
                        </button>
                    </div>

                    <h2 className="highlight-text">{seller.name}</h2>

                    <div className="list-group">
                        <div className="list-group-item border-0">
                            <i className="bi bi-envelope pt-2"/>
                            <span className= "ps-2"/>{seller.email}
                        </div>

                        <div className="list-group-item border-0">
                            <i className="bi bi-phone pt-2"/>
                            <span className= "ps-2"/>{seller.phone}
                        </div>

                        <div className="list-group-item border-0">
                            <i className="bi bi-house-door pt-2"/>
                            <span className= "ps-2"/>{seller.address}
                        </div>

                        <div className="list-group-item border-0">
                            <i className="bi bi-balloon pt-2"/>
                            <span className= "ps-2"/>Member Since {seller.memberSince}
                        </div>
                    </div>
                </div>

                <div className="border-top pt-3">
                    <h1 className="highlight-text">Recent Sold</h1>
                    <hr className="border border-dark border-2"/>
                    <div className="d-flex flex-row col">
                        <div className="p-2 col-3 fw-bold"> Order Date</div>
                        <div className="p-2 col-3 fw-bold"> Sell Record Number</div>
                        <div className="p-2 col-3 fw-bold"> Order Amount</div>
                        <div className="p-2 col-3 fw-bold"> Details</div>
                    </div>
                    <hr className="text-secondary"/>

                    <div className="flex-row">
                        <RecentSoldList sid={sid} />

                        {/*<div className="p-2 col-3 ">September 5, 2022</div>*/}
                        {/*<div className="p-2 col-3 ">12345000</div>*/}
                        {/*<div className="p-2 col-3 ">$10.00</div>*/}
                        {/*<div className="p-2 col-3 ">*/}
                        {/*    <Link to="/seller-view-detail" className="nav-link" >*/}
                        {/*        <button className="btn rounded-pill pt-1 align-baseline" id="allBtn-color">*/}
                        {/*            View Details*/}
                        {/*        </button>*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <h5>You are viewing other's profile...</h5>
            <ProfileBanner/>
            <div id="infoSection">

                <h2 className="highlight-text">{seller.name}</h2>

                <div className="list-group">
                    <div className="list-group-item border-0">
                        <i className="bi bi-envelope pt-2"/>
                        <span className= "ps-2"/>*hidden*
                    </div>

                    <div className="list-group-item border-0">
                        <i className="bi bi-phone pt-2"/>
                        <span className= "ps-2"/>*hidden*
                    </div>

                    <div className="list-group-item border-0">
                        <i className="bi bi-house-door pt-2"/>
                        <span className= "ps-2"/>*hidden*
                    </div>

                    <div className="list-group-item border-0">
                        <i className="bi bi-balloon pt-2"/>
                        <span className= "ps-2"/>Member Since {seller.memberSince}
                    </div>
                </div>
            </div>
            <h6>Some private sections have been hidden.</h6>
            {
                currentUser &&
                <Button className="px-4 btn btn-danger rounded-pill fw-bold"
                        onClick={routeToMyProfile}>
                    Back to your profile
                </Button>
            }
            {
                !currentUser &&
                <Button className="px-4 btn btn-danger rounded-pill fw-bold"
                        onClick={routeToSignIn}>
                    Sign In
                </Button>
            }
        </>
    )

}


export default SellerProfileScreen;

