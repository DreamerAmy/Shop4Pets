import React from "react";
import {Link} from "react-router-dom";
import ProfileBannerComponent from "../../../../components/ProfileBannerComponent";

const SellerViewDetail = () => {
    return (
        <div className="row mt-2">
            <div className="col-2">
            </div>
            <div className="col-8" style={{ "position": "relative" }}>
                <ProfileBannerComponent/>

{/*TODO:get from DB and map return here*/}
                <div className="border-top pt-3">
                    <h1 className="highlight-text">Order Details</h1>
                    <hr className="border border-dark border-2"/>
                    <div className="d-flex flex-row col">
                        <div className="p-2 col-3 fw-bold"> Order Date</div>
                        <div className="p-2 col-3 fw-bold"> Order Number</div>
                        <div className="p-2 col-3 fw-bold"> Qty </div>
                        <div className="p-2 col-3 fw-bold"> Total </div>
                    </div>
                    <hr className="text-secondary"/>

                    <div className="d-flex flex-row col">
                        <div className="p-2 col-3 ">September 5, 2022</div>
                        <div className="p-2 col-3 ">12345000</div>
                        <div className="p-2 col-3 "> 2 </div>
                        <div className="p-2 col-3 ">$10.00</div>
                    </div>
                </div>

                <Link to="/profile/seller">
                    <button className="btn rounded-pill mt-3 float-end"
                            id="allBtn-color">Back</button>
                </Link>
            </div>
            <div className="col-2">
            </div>
        </div>
    )
}


export default SellerViewDetail;