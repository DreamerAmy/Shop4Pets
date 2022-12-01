import React from "react";
import "../../screens/ProfileScreen/index.css";
import FavProductItem from "./FavProductItem";

const FavProductList = ({ productList }) => {
    return (
        <>
            <ul className="list-group" >
                {productList.map(p => <FavProductItem key={p._id} product={p} />)}
            </ul>
        </>
    );
};
export default FavProductList;