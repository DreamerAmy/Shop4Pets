import React from "react";
import {Link} from "react-router-dom";
import ProfileBanner from "../../ProfileBanner";

const SellerMyItems = () => {
    return (
        <div className="row mt-2">
            <div className="col-1">
                left
            </div>
            <div className="col-10" style={{ "position": "relative" }}>
                <ProfileBanner/>

                {/*TODO:get from DB and map return here*/}
                <div className="border-top pt-3">
                    <h1 className="highlight-text">
                        My Products
                        <Link to="/add-more-items">
                            <button className="float-end btn rounded-pill mt-3"
                                    id="allBtn-color">Add</button>
                        </Link>
                    </h1>

                    <hr className="border border-dark border-2"/>
                    <div className="d-flex flex-row col">
                        <div className="p-2 col-2 fw-bold"> Item Id </div>
                        <div className="p-2 col-2 fw-bold"> Item Name</div>
                        <div className="p-2 col-2 fw-bold"> Description </div>
                        <div className="p-2 col-2 fw-bold"> Price </div>
                        <div className="p-2 col-2 fw-bold"> Sold </div>
                        <div className="p-2 col-2 fw-bold"> In Stock </div>
                    </div>
                    <hr className="text-secondary"/>

                    <div className="d-flex flex-row col">
                        <div className="p-2 col-2"> 12345000 </div>
                        <div className="p-2 col-2"> Toy </div>
                        <div className="p-2 col-2"> Dog's toy </div>
                        <div className="p-2 col-2"> $5.00 </div>
                        <div className="p-2 col-2"> 5 </div>
                        <div className="p-2 col-2"> 10 </div>
                    </div>
                </div>

                <Link to="/profile/seller">
                    <button className="btn rounded-pill mt-3 float-end"
                            id="allBtn-color">Back</button>
                </Link>
            </div>

            <div className="col-1">
                right
            </div>
        </div>
    )
}


export default SellerMyItems;