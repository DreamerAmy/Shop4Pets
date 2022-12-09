import React, {useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findUserThunk} from "../../../../services/UserThunks";
import UserList from "./user-list";

const AdminUserListScreen = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const adid = paths[2];

    const { user, loading } = useSelector((state) => state.user)
    const dispatch = useDispatch();
    useEffect(() => { dispatch(findUserThunk()) }, []) //eslint-disable-line react-hooks/exhaustive-deps

    let backUrl = ""
    if(user){
        backUrl = "/profile/" + adid;
    }

    return (
        <div className="row mt-2">
            <div className="col-1"></div>
            <div className="col-10" style={{ "position": "relative" }}>

                <div className="border-top pt-3">
                    <h1 className="highlight-text">
                        All Users
                    </h1>

                    <hr className="border border-dark border-2"/>
                    <div className="d-flex flex-row col">
                        <div className="p-2 col-2 fw-bold"> User Id </div>
                        <div className="p-2 col-2 fw-bold"> Type </div>
                        <div className="p-2 col-2 fw-bold"> User Name</div>
                        <div className="p-2 col-2 fw-bold"> Email </div>
                        <div className="p-2 col-2 fw-bold"> Phone </div>
                        <div className="p-2 col-2 fw-bold"> Address </div>
                    </div>
                    <hr className="text-secondary"/>

                    <div className="flex-row">
                        <div className="list-group">
                            {
                                loading && <li className="list-group-item">loading</li>
                            }
                            {user && !loading && user.map(user =>
                                <UserList key={user._id} user={user}/>)}
                        </div>
                    </div>
                </div>

                <Link to={backUrl}>
                    <button className="btn rounded-pill mt-3 float-start"
                            id="allBtn-color">Back</button>
                </Link>

                {/*<Link to={saveUrl}>*/}
                {/*    <button className="btn rounded-pill mt-3 float-end"*/}
                {/*            id="allBtn-color">save</button>*/}
                {/*</Link> */}
                <br/> <br/> <br/> <br/>
            </div>

            <div className="col-1"></div>
        </div>
    )
}


export default AdminUserListScreen;