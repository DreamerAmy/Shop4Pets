
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findProductByIdThunk } from "../services/ProductThunks";
import "../screens/ProfileScreen/index.css";
import foodImage from "../images/food2.jpg"
import UpdateFavComponent from "../components/UpdateFavComponent";


const ProductScreen = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    let pid = paths[2];
    if (pid) { return <ShowProductScreen pid={pid} /> }
}


const ShowProductScreen = ({ pid }) => {
    let { productItem } = useSelector((state) => state.productItem)
    let { currentUser } = useSelector((state) => state.user);

    const dispatch = useDispatch()
    useEffect(() => {
        if (!pid) { return; }
        dispatch(findProductByIdThunk(pid))
    }, [])

    // Drop down part
    const getInitialState = () => {
        const value = 1;
        return value;
    };
    const [quantity, setQuantity] = useState(getInitialState);
    const handleChange = (e) => {
        setQuantity(e.target.value);
    };


    // Add to cart button
    function passToCart() {
        // pass quantity variable to cart
        console.log("quantity", quantity);
    }

    return (
        <>
            <div className="row mt-4">
                <div className="col-2"></div>
                <div className="col-3" >
                    <h2 className="">Product Detail</h2>
                    <img className="productImg" src={foodImage} alt="" />
                </div>
                <div className="col-5" >
                    {productItem &&
                        <>
                            <h3 className="mt-5"> {productItem.productName}</h3>
                            <div className="productDescription"> {productItem.description}</div>
                            <div className="productPrice"> ${productItem.price}</div>
                            {!currentUser && <>Please sign in to favorite the item.</>}
                            {currentUser && pid && <UpdateFavComponent uid={currentUser._id} pid={pid} />}
                            <div className="pt-3">
                                <select value={quantity} onChange={handleChange} className="dropdown">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <div className="dropdownHint">{`Hurry up! Add ${quantity} to your cart!`}</div>
                            </div>

                            <button className="btn btn-default cartBtn" onClick={passToCart} >
                                Add to Cart
                            </button >
                        </>
                    }
                </div >
                <div className="col-2"></div>
            </div >
        </>
    )



}

export default ProductScreen;

