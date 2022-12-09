import React from "react";
import {useDispatch} from "react-redux";
import {deleteUserThunk} from "../../../../services/UserThunks";

const UserList = ({ user }) => {
    let uid = user._id;

    const dispatch = useDispatch();
    const deleteUserHandler = (id) => {
        dispatch(deleteUserThunk(id));
    }

    return (
        <>
            {user &&
                <li className="list-group-item d-flex">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteUserHandler(uid)}></i>
                    <div className="p-2 col-2 ">{uid.substring(uid.length - 8, uid.length)}</div>
                    <div className="p-2 col-2 ">{user.accountType}</div>
                    <div className="p-2 col-2 ">{user.name}</div>
                    <div className="p-2 col-2 ">{user.email}</div>
                    <div className="p-2 col-2 ">{user.phone}</div>
                    <div className="p-2 col-2 ">{user.address}</div>
                </li>
            }

        </>
    );
};
export default UserList;