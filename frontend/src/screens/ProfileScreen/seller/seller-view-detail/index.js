import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findSellerHistByIdThunk } from "../../../../services/SellerThunks";
import SellRecordItem from "./SellRecordItem";


const SellerViewDetail = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const shid = paths[2];
    console.log(shid)

    const { sellerItem, loading } = useSelector((state) => state.sellerItem)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(findSellerHistByIdThunk(shid)) }, []) //eslint-disable-line react-hooks/exhaustive-deps
    let backUrl = ""
    if (sellerItem) {
        backUrl = "/profile/" + sellerItem.sellerId;
    }

    return (
        <div className="row mt-2">
            <div className="col-2">
            </div>
            <div className="col-8" style={{ "position": "relative" }}>

                <div className="border-top pt-3">
                    <h1 className="highlight-text">Order Details</h1>
                    <hr className="border border-dark border-2" />
                    <div className="d-flex flex-row col">
                        <div className="p-2 col-2 fw-bold"> Order Date</div>
                        <div className="p-2 col-3 fw-bold"> Product Number</div>
                        <div className="p-2 col-2 fw-bold"> Qty </div>
                        <div className="p-2 col-3 fw-bold"> Receiver </div>
                        <div className="p-2 col-3 fw-bold"> Address </div>
                    </div>
                    <hr className="text-secondary" />

                    <div className="flex-row">
                        {sellerItem && !loading && <SellRecordItem seller={sellerItem} />}
                    </div>
                </div>

                <Link to={backUrl}>
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