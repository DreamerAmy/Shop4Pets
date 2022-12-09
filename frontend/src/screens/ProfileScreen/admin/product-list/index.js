import React, {useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findProductThunk} from "../../../../services/ProductThunks";
import ProductList from "./product-list";

const AdminProductListScreen = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const adid = paths[2];

    const { product, loading } = useSelector((state) => state.product)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(findProductThunk()) }, []) //eslint-disable-line react-hooks/exhaustive-deps

    let backUrl = ""
    if(product){
        backUrl = "/profile/" + adid;
    }
    return (
        <div className="row mt-2">
            <div className="col-1"></div>
            <div className="col-10" style={{ "position": "relative" }}>

                <div className="border-top pt-3">
                    <h1 className="highlight-text">
                        All Products
                    </h1>

                    <hr className="border border-dark border-2"/>
                    <div className="d-flex flex-row col">
                        <div className="p-2 col-2 fw-bold"> Product Id </div>
                        <div className="p-2 col-1 fw-bold"> Category </div>
                        <div className="p-2 col-2 fw-bold"> Product Name</div>
                        <div className="p-2 col-2 fw-bold"> Brand </div>
                        <div className="p-2 col-2 fw-bold"> Seller ID </div>
                        <div className="p-2 col-1 fw-bold"> Unit Price </div>
                        <div className="p-2 col-1 fw-bold"> In Stock </div>
                        <div className="p-2 col-1 fw-bold"> Unit Sold </div>
                    </div>
                    <hr className="text-secondary"/>

                    <div className="flex-row">
                        <div className="list-group">
                            {
                                loading && <li className="list-group-item">loading</li>
                            }
                            {product && !loading && product.map(product =>
                                <ProductList key={product._id} product={product}/>)}
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
                <br/> <br/> <br/> <br/>
            </div>

            <div className="col-1"></div>
        </div>
    )
}


export default AdminProductListScreen;