import React from "react";
import { Link } from "react-router-dom";
import './index.css';

const BuyerProfileScreen = () => {
    return (
        <div className="row mt-2">
            <div className="col-3">
                left
            </div>
            <div className="col-6" style={{ "position": "relative" }}>
                <div className="font-setting" id="profileScreen">
                    {/* to be delted */}
                    <div style={{
                        "backgroundColor": "#ff9900",
                        "color": "white", padding: "20px", "font-weight": "bold", "size": "20px"
                    }}>Backery</div>

                    <div className="border-top border-bottom pt-3 pb-3" id="accountInfo">
                        <img src="https://drive.google.com/uc?export=view&id=1MRncQJ15xE98At6Defx3WRRXdFgOH6L9" className="profile-icon" alt="" />
                    </div>
                    <div id="infoSection">
                        <button className="btn btn-default shadow-none float-end me-3" id="editBtn">
                            <Link to="/edit-profile" href="/" className="nav-link" >Edit</Link>
                        </button>
                        <h2 className="highlight-text">Kailin Jin</h2>

                        <i className="bi bi-envelope"></i>
                        <span className="ps-4">jin.ka@northeastern.edu</span><br />

                        <i className="bi bi-phone"></i>
                        <span className="ps-4">111-2222-3333</span><br />

                        <i className="bi bi-house-door "></i>
                        <span className="ps-4">401 Terry Ave N #103, Seattle, WA 98109</span><br />

                        <i className="bi bi-balloon"></i>
                        <span className="ps-4">Member Since 2022</span><br />
                    </div>


                    <div className="border-top pt-3 pe-1">
                        <h3 className="highlight-text">Recent Orders</h3>
                    </div>

                </div >
            </div>
            <div className="col-3">
                right
            </div>
        </div>

    )
}

export default BuyerProfileScreen;

