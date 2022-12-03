import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../ProfileScreen/index.css";
import ProfileBannerComponent from "../../components/ProfileBannerComponent.js"
import { updateUserThunk } from "../../services/UserThunks";


const BuyerEditScreen = (user) => {
    const buyer = user.data;
    const bid = buyer._id;
    let [info, setInfo] = useState(buyer);
    const dispatch = useDispatch();
    const saveUrl = "/profile/" + bid;

    const buyerClickHandler = async () => {
        const newBuyer = {
            ...buyer,
            name: info.name,
            address: info.address,
            phone: info.phone
        }
        dispatch(updateUserThunk(newBuyer));
        window.alert('You have successfully updated your info!')
    }


    return (
        <>
            <ProfileBannerComponent />
            <div className="form-group" id="editSection">
                <label for="inputName">Name</label>
                <input value={info.name}
                    id="inputName"
                    placeholder="Name"
                    className="form-control"
                    onChange={(event) => setInfo({ ...info, name: event.target.value })} >
                </input>

                <label for="inputAddress">Address</label>
                <input value={info.address}
                    id="inputAddress"
                    placeholder="Address"
                    className="form-control"
                    onChange={(event) => setInfo({ ...info, address: event.target.value })} >
                </input>

                <label for="inputPhone">Phone Number</label>
                <input value={info.phone}
                    id="inputPhone"
                    placeholder="Phone Number"
                    className="form-control"
                    onChange={(event) => setInfo({ ...info, phone: event.target.value })} >
                </input>

                <Link to={saveUrl} href="/" className="nav-link" >
                    <button className="btn btn-default" id="discardBtn" >
                        Back to Profile
                    </button>
                </Link>

                <Link to={saveUrl} href="/" className="nav-link" >
                    <button className="btn btn-default" id="saveBtn" onClick={buyerClickHandler}>
                        Save
                    </button>
                </Link>

            </div >
        </>

    )
}

export default BuyerEditScreen;

