import React from "react";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileBanner from "../ProfileBanner";

const SellerProfileScreen = () => {
    const seller = useSelector(state => state.seller);

    return (
        <div className="row mt-2">
            <div className="col-2">
                left
            </div>

            <div className="col-8" style={{ "position": "relative" }}>
                <div className="font-setting" id="profileScreen">
                    <ProfileBanner/>
                    <div id="infoSection">
                        <div className="float-end list-group pt-5">
                            <button className="btn list-group-item rounded-pill" id="menuBtn">
                                <Link to="/seller-my-items" href="#" className="nav-link" >My Products</Link>
                            </button>

                            <button className="btn list-group-item rounded-pill" id="menuBtn">
                                <Link to="/seller-my-profit" href="#" className="nav-link" >My Profit
                                </Link>
                            </button>

                            <button className="btn list-group-item" id="editBtn">
                                <Link to="/seller-edit-profile" href="#" className="nav-link" >Edit</Link>
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
                                <span className= "ps-2"/>{seller.location}
                            </div>

                            <div className="list-group-item border-0">
                                <i className="bi bi-balloon pt-2"/>
                                <span className= "ps-2"/>{seller.since}
                            </div>
                        </div>
                    </div>

                    <div className="border-top pt-3">
                        <h1 className="highlight-text">Recent Sold</h1>
                        <hr className="border border-dark border-2"/>
                        <div className="d-flex flex-row col">
                            <div className="p-2 col-3 fw-bold"> Order Date</div>
                            <div className="p-2 col-3 fw-bold"> Order Number</div>
                            <div className="p-2 col-3 fw-bold"> Amount </div>
                            <div className="p-2 col-3 fw-bold"> Details</div>
                        </div>
                        <hr className="text-secondary"/>

                        <div className="d-flex flex-row col">
                            <div className="p-2 col-3 ">September 5, 2022</div>
                            <div className="p-2 col-3 ">12345000</div>
                            <div className="p-2 col-3 ">$10.00</div>
                            <div className="p-2 col-3 ">
                                <Link to="/seller-view-detail" className="nav-link" >
                                    <button className="btn rounded-pill pt-1 align-baseline" id="allBtn-color">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="col-2">
                right
            </div>
        </div>

    )
}


export default SellerProfileScreen;

