import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";
import { updateBuyer } from "../ProfileScreen/BuyerReducer"
import ProfileBanner from "./ProfileBanner.js"

const BuyerEditScreen = () => {
    const buyer = useSelector(state => state.buyer);
    let [info, setInfo] = useState(buyer);
    const dispatch = useDispatch();
    const buyerClickHandler = () => {
        const newBuyer = {
            ...buyer,
            name: info.name,
            email: info.email,
            address: info.address,
            phone: info.phone
        }
        dispatch(updateBuyer(newBuyer));
    }
    return (
        <div className="row mt-2">
            <div className="col-3">
                left
            </div>
            <div className="col-6" >
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

                    <Link to="/profile/buyer" href="/" className="nav-link" >
                        <button className="btn btn-default" id="saveBtn" onClick={buyerClickHandler}>
                            Save
                        </button>
                    </Link>
                </div >
            </div>

            <div className="col-3">
                right
            </div>
        </div >

    )
}

export default BuyerEditScreen;

