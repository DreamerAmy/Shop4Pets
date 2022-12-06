import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findSellerHistBySellerIdThunk } from "../../../../services/SellerThunks";
import SoldItem from "./RecentSoldItem";


const RecentSoldList = (data) => {
    const sid = data.sid;
    const { seller, loading } = useSelector((state) => state.seller)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(findSellerHistBySellerIdThunk(sid)) }, []) //eslint-disable-line react-hooks/exhaustive-deps
    let sellerClone = [...seller];
    // TODO: Debug this section -> not showing details on the Seller's page(Recent Sold)
    return (
        <>
            <ul className="list-group">
                {
                    loading && <li className="list-group-item">loading...</li>
                }
                {sellerClone.reverse().slice(0, 3)
                    .map(seller => <SoldItem key={seller._id} order={seller} />)}
            </ul>
        </>
    );
};
export default RecentSoldList;