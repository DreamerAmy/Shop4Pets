import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";
import ProfileBanner from "./ProfileBanner.js"
import { updateUserThunk } from "../../services/UserThunks";

const BuyerEditScreen = (user) => {
    const buyer = user.data;
    const bid = buyer._id;
    let [info, setInfo] = useState(buyer);
    const dispatch = useDispatch();
    const saveUrl = "/profile/" + bid;
    const buyerClickHandler = () => {
        const newBuyer = {
            ...buyer,
            name: info.name,
            email: info.email,
            address: info.address,
            phone: info.phone
        }
        dispatch(updateUserThunk(newBuyer));
    }

    return (
        <div className="row mt-2">
            <div className="col-2">
                left
            </div>
            <div className="col-8" >
                <ProfileBanner />
                <div className="form-group" id="editSection">
                    <label for="inputName">Name</label>
                    <input value={info.name}
                        id="inputName"
                        placeholder="Name"
                        className="form-control"
                        onChange={(event) => setInfo({ ...info, name: event.target.value })} >
                    </input>

                    <label for="inputEmail">Email</label>
                    <input value={info.email}
                        id="inputEmail"
                        placeholder="Email"
                        className="form-control"
                        onChange={(event) => setInfo({ ...info, email: event.target.value })} >
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
                            Discard
                        </button>
                    </Link>

                    <Link to={saveUrl} href="/" className="nav-link" >
                        <button className="btn btn-default" id="saveBtn" onClick={buyerClickHandler}>
                            Save
                        </button>
                    </Link>
                </div >
            </div>

            <div className="col-2">
                right
            </div>
        </div >

    )
}

export default BuyerEditScreen;
