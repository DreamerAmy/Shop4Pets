import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductBySellerIdThunk } from "../../../../services/ProductThunks";
import SellerItem from "./SellerItem";

const SellerMyItems = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const sid = paths[2];
    console.log(sid)

    const { productItem, loading } = useSelector((state) => state.productItem)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(findProductBySellerIdThunk(sid)) }, []) //eslint-disable-line react-hooks/exhaustive-deps
    // let saveUrl = "/view-myProducts/" + sid;

    let backUrl = ""
    if (productItem) {
        backUrl = "/profile/" + sid;
    }
    // let addMoreItemUrl = "/add-more-items/" + sid;

    let sellerItemClone = null
    if (productItem) {
        sellerItemClone = [...productItem]
    }
    console.log(sellerItemClone)

    return (
        <div className="row mt-2">
            <div className="col-1"></div>
            <div className="col-10" style={{ "position": "relative" }}>

                <div className="border-top pt-3">
                    <h1 className="highlight-text">
                        My Products
                        {/*<Link to={addMoreItemUrl}>*/}
                        {/*    <button className="float-end btn rounded-pill mt-3"*/}
                        {/*            id="allBtn-color">Add</button>*/}
                        {/*</Link>*/}
                    </h1>

                    <hr className="border border-dark border-2" />
                    <div className="d-flex flex-row col">
                        <div className="p-2 col-2 fw-bold"> Item Id </div>
                        <div className="p-2 col-2 fw-bold"> Item Name</div>
                        <div className="p-2 col-2 fw-bold"> Description </div>
                        <div className="p-2 col-2 fw-bold"> Price </div>
                        <div className="p-2 col-2 fw-bold"> Sold </div>
                        <div className="p-2 col-2 fw-bold"> In Stock </div>
                    </div>
                    <hr className="text-secondary" />

                    <div className="flex-row">
                        <div className="list-group">
                            {
                                loading && <li className="list-group-item">loading</li>
                            }
                            {productItem && sellerItemClone && sellerItemClone.length > 0 && !loading && sellerItemClone.map(productItem =>
                                <SellerItem key={productItem._id} product={productItem} />)}
                        </div>
                    </div>
                </div>

                <Link to={backUrl}>
                    <button className="btn rounded-pill mt-3 float-start"
                        id="allBtn-color">Back</button>
                </Link>

                {/*<Link to={saveUrl}>*/}
                {/*    <button className="btn rounded-pill mt-3 float-end"*/}
                {/*            id="allBtn-color">save</button>*/}
                {/*</Link> */}
                <br /> <br /> <br /> <br />
            </div>

            <div className="col-1"></div>
        </div>
    )
}


export default SellerMyItems;