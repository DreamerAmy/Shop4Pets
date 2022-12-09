
import "../ProfileScreen/index.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../ProfileScreen/index.css";
import ProfileBannerComponent from "../../components/ProfileBannerComponent.js"
import { updateUserThunk } from "../../services/UserThunks";


const ProfileEditScreen = () => {
    let user = JSON.parse(sessionStorage.getItem('currentUser'))
    let [info, setInfo] = useState(user);
    const dispatch = useDispatch();
    let saveUrl = "/profile/" + user._id;
    const userClickHandler = async () => {
        const newUser = {
            ...user,
            name: info.name,
            address: info.address,
            phone: info.phone
        }
        dispatch(updateUserThunk(newUser));
        sessionStorage.setItem('currentUser', JSON.stringify(newUser));
        window.alert('You have successfully updated your info!')
    }

    if (user) {
        return (
            <div className="row mt-2">
                <div className="col-2"></div>
                <div className="col-8">
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
                            <button className="btn btn-default" id="saveBtn" onClick={userClickHandler}>
                                Save
                            </button>
                        </Link>
                    </div >
                </div>
                <div className="col-2"></div>
            </div>

        )
    }
}

export default ProfileEditScreen;

