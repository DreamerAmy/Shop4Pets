import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileBanner from "../../components/ProfileBannerComponent";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import AdminOrderList from "./admin/order-list";
import ProfileBannerComponent from "../../components/ProfileBannerComponent.js"

const AdminProfileScreen = (user) => {
    let navigate = useNavigate();
    const admin = user.data;
    const adid = admin._id;

    let { currentUser } = useSelector((state) => state.user);
    if (!currentUser) {
        currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
    }
    const usersUrl = "../usersall/" + adid;
    const itemsUrl = "../itemsall/" + adid;
    const editUrl = "../edit-profile/" + adid;

    const routeToMyProfile = () => {
        let myProfileUrl = "../profile/" + currentUser._id;
        navigate(myProfileUrl);
        window.location.reload(false)
    }

    const routeToSignIn = () => {
        navigate("../login/");
        window.location.reload(false)
    }
    if (currentUser && currentUser._id === adid) {
        return (
            <div className="font-setting" id="profileScreen">
                <ProfileBannerComponent />
                <div id="infoSection">
                    <div className="float-end list-group pt-5">
                        <button className="btn list-group-item rounded-pill" id="menuBtn">
                            <Link to={usersUrl} href="#" className="nav-link" >Users</Link>
                        </button>

                        <button className="btn list-group-item rounded-pill" id="menuBtn">
                            <Link to={itemsUrl} href="#" className="nav-link" >Products</Link>
                        </button>

                        <button className="btn list-group-item" id="editBtn">
                            <Link to={editUrl} href="#" className="nav-link" >Edit</Link>
                        </button>
                    </div>

                    <h2 className="highlight-text">Admin {admin.name}</h2>

                    <div className="list-group">
                        <div className="list-group-item border-0">
                            <i className="bi bi-envelope pt-2" />
                            <span className="ps-2" />{admin.email}
                        </div>

                        <div className="list-group-item border-0">
                            <i className="bi bi-phone pt-2" />
                            <span className="ps-2" />{admin.phone}
                        </div>

                        <div className="list-group-item border-0">
                            <i className="bi bi-house-door pt-2" />
                            <span className="ps-2" />{admin.address}
                        </div>

                        <div className="list-group-item border-0">
                            <i className="bi bi-balloon pt-2" />
                            <span className="ps-2" />Member Since {admin.memberSince}
                        </div>
                    </div>
                </div>

                <div className="border-top pt-3">
                    <h1 className="highlight-text">Order List</h1>
                    <hr className="border border-dark border-2" />
                    <div className="d-flex flex-row col">
                        <div className="p-2 col-3 fw-bold"> Order Number</div>
                        <div className="p-2 col-3 fw-bold"> Quantity</div>
                        <div className="p-2 col-3 fw-bold"> Receiver </div>
                        <div className="p-2 col-3 fw-bold"> Total Amount</div>
                    </div>
                    <hr className="text-secondary" />

                    <div className="flex-row">
                        <AdminOrderList />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <h5>You are viewing other's profile...</h5>
            <ProfileBanner />
            <div id="infoSection">

                <h2 className="highlight-text">{admin.name}</h2>

                <div className="list-group">
                    <div className="list-group-item border-0">
                        <i className="bi bi-envelope pt-2" />
                        <span className="ps-2" />*hidden*
                    </div>

                    <div className="list-group-item border-0">
                        <i className="bi bi-phone pt-2" />
                        <span className="ps-2" />*hidden*
                    </div>

                    <div className="list-group-item border-0">
                        <i className="bi bi-house-door pt-2" />
                        <span className="ps-2" />*hidden*
                    </div>

                    <div className="list-group-item border-0">
                        <i className="bi bi-balloon pt-2" />
                        <span className="ps-2" />Member Since {admin.memberSince}
                    </div>
                </div>
            </div>
            <h6>Some private sections have been hidden.</h6>
            {
                currentUser &&
                <Button className="px-4 btn btn-danger rounded-pill fw-bold"
                    onClick={routeToMyProfile}>
                    Back to your profile
                </Button>
            }
            {
                !currentUser &&
                <Button className="px-4 btn btn-danger rounded-pill fw-bold"
                    onClick={routeToSignIn}>
                    Sign In
                </Button>
            }
        </>
    )

}

export default AdminProfileScreen;