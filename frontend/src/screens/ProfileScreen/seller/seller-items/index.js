import React, {useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findProductBySellerId} from "../../../../services/ProductService";

const SellerMyItems = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const sid = paths[2];
    console.log(sid)

    const { product, loading } = useSelector((state) => state.product)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(findProductBySellerId(sid)) }, []) //eslint-disable-line react-hooks/exhaustive-deps
    let backUrl = ""
    if(product){
        backUrl = "/profile/" + product.sellerId;
    }
    let addMoreItemUrl = "/add-more-items/" + product.sellerId;
    return (
        <div className="row mt-2">
            <div className="col-1"></div>
            <div className="col-10" style={{ "position": "relative" }}>

                <div className="border-top pt-3">
                    <h1 className="highlight-text">
                        My Products
                        <Link to={addMoreItemUrl}>
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

                <Link to={backUrl}>
                    <button className="btn rounded-pill mt-3 float-end"
                            id="allBtn-color">Back</button>
                </Link>
            </div>

            <div className="col-1"></div>
        </div>
    )
}


export default SellerMyItems;