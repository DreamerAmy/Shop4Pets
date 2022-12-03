import React from "react";
import ProfileBanner from "../../ProfileBanner";
import {Link} from "react-router-dom";

const SellerMyPro = () => {
    return (
        <div className="row mt-2">
            <div className="col-2">
                left
            </div>
            <div className="col-8" style={{ "position": "relative" }}>

                <ProfileBanner/>

                {/*TODO:get from DB and map return here*/}
                <div className="border-top pt-3">
                    <h1 className="highlight-text">My Profit</h1>
                    <hr className="border border-dark border-2"/>
                    <div className="d-flex flex-row col">
                        <div className="p-2 col-2 fw-bold">  Item Id </div>
                        <div className="p-2 col-2 fw-bold"> # Item Sold  </div>
                        <div className="p-2 col-2 fw-bold"> Price </div>
                        <div className="p-2 col-2 fw-bold"> Total </div>
                        <div className="p-2 col-2 fw-bold"> Note </div>
                    </div>
                    <hr className="text-secondary"/>

                    <div className="d-flex flex-row col">
                        <div className="p-2 col-2"> 1234500 </div>
                        <div className="p-2 col-2"> 5 </div>
                        <div className="p-2 col-2"> $5.00 </div>
                        <div className="p-2 col-2"> $25.00 </div>
                        <textarea className="p-2 col-2"
                                  placeholder={'Need more Items like this...'}></textarea>
                    </div>
                </div>

                <Link to="/profile/seller">
                    <button className="btn rounded-pill mt-3 float-end"
                            id="allBtn-color">Save</button>
                </Link>

                <Link to="/profile/seller">
                    <button className="btn rounded-pill mt-3 float-end"
                            id="allBtn-color">Back</button>
                </Link>

            </div>
            <div className="col-2">
                right
            </div>
        </div>
    )
}


export default SellerMyPro;