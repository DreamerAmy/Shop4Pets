import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findSellerHistByIdThunk} from "../../../../services/SellerThunks";
import SoldItem from "./RecentSoldItem";

const RecentSoldList = (data) => {
    const currentSid = data.sid;
    const {seller, loading} = useSelector((state) => state.seller)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findSellerHistByIdThunk(currentSid))}, []) //eslint-disable-line react-hooks/exhaustive-deps
    let sellerHistClone = [...seller];
    return (
        <>
            <div className="list-group">
                {
                    loading && <li className="list-group-item">loading...</li>
                }
                {sellerHistClone.reverse().slice(0, 3)
                    .map(seller => <SoldItem key={seller._id} seller={seller} />)}
            </div>
        </>
    );
};
export default RecentSoldList;