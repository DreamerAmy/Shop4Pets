import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateSeller} from "./SellerReducer";
import ProfileBanner from "../ProfileBanner";

const SellerEditScreen = () => {
    const seller = useSelector(state => state.seller);
    let[currSeller, setSeller] = useState(seller);
    const dispatch = useDispatch();
    const editClickHandler = (seller) => {
        dispatch(updateSeller(seller));
    }
    return(
        <div className="row mt-2">
            <div className="col-2">
                left
            </div>
            <div className="col-8">
                <ProfileBanner/>

                <div className="form-group" id="editSection">
                    <label htmlFor="inputName">Name</label>
                    <input value={currSeller.name}
                           id="inputName"
                           placeholder="Name"
                           className="form-control"
                           onChange={(event) => setSeller({...currSeller, name: event.target.value})}>
                    </input>

                    <label htmlFor="inputEmail">Email</label>
                    <input value={currSeller.email}
                           id="inputEmail"
                           placeholder="Email"
                           className="form-control"
                           onChange={(event) => setSeller({...currSeller, email: event.target.value})}>
                    </input>

                    <label htmlFor="inputAddress">Address</label>
                    <input value={currSeller.location}
                           id="inputAddress"
                           placeholder="Address"
                           className="form-control"
                           onChange={(event) => setSeller({...currSeller, location: event.target.value})}>
                    </input>

                    <label htmlFor="inputPhone">Phone Number</label>
                    <input value={currSeller.phone}
                           id="inputPhone"
                           placeholder="Phone Number"
                           className="form-control"
                           onChange={(event) => setSeller({...currSeller, phone: event.target.value})}>
                    </input>

                    <Link to="/profile/seller" href="/" className="nav-link">
                        <button className="btn rounded-pill float-end" id="menuBtn" onClick={() => editClickHandler(currSeller)}>
                            Save
                        </button>
                    </Link>
                </div>
            </div>

            <div className="col-2">
                right
            </div>
        </div>
    )
}
export default SellerEditScreen;