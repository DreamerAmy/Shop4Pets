import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findUserByIdThunk, updateUserThunk } from "../services/UserThunks";
import { findProductByIdThunk } from "../services/ProductThunks";
import '../screens/ProfileScreen/index.css';

const UpdateFavComponent = ({ uid, pid }) => {
    let { user } = useSelector((state) => state.user);
    let { productItem } = useSelector((state) => state.productItem)
    const dispatch = useDispatch()
    useEffect(() => { dispatch(findUserByIdThunk(uid)) }, [])
    useEffect(() => { dispatch(findProductByIdThunk(pid)) }, [])

    function removeFav() {
        let favCount = JSON.parse(sessionStorage.getItem('favCount'))
        sessionStorage.setItem('favCount', JSON.stringify(favCount - 1));
        let index = user.favorites.indexOf(productItem._id);
        let removedArray = [...user.favorites];
        removedArray.splice(index, 1);
        dispatch(updateUserThunk({
            ...user,
            favorites: removedArray,
        }));
        window.alert(`[${productItem.productName}] has been removed from [${user.name}]'s favorite!`)
        window.location.reload(false)
    }


    function addFav() {
        let favCount = JSON.parse(sessionStorage.getItem('favCount'))
        sessionStorage.setItem('favCount', JSON.stringify(favCount + 1));
        dispatch(updateUserThunk({
            ...user,
            favorites: [...user.favorites, productItem._id],
        }));
        window.alert(`[${productItem.productName}] has been added to [${user.name}]'s favorite!`)
        window.location.reload(false)

    }

    if (user && !Array.isArray(user) && productItem && !Array.isArray(productItem)) {
        let favBoolean = user.favorites.includes(productItem._id);
        if (favBoolean) {
            return (<>
                <h6>Hey {user.name}...</h6>
                < button className="btn btn-default favBtn" onClick={removeFav} >
                    Remove From Favorite
                </button >
            </>
            )
        } else {
            return (<>
                <h6>Hey {user.name}...</h6>
                <button className="btn btn-default favBtn" onClick={addFav} >
                    Add To Favorite
                </button>
            </>)
        }
    }
}

export default UpdateFavComponent