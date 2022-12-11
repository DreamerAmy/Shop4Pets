import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
import './index.css'
import { logoutThunk } from "../services/UserThunks";
import {useDispatch, useSelector} from "react-redux";
import React from "react";

// Display profile btn only user is logged in
const profileBtn = (currentUser) => {
    let profileUrl = "../profile/";
    if (currentUser) {
        // profileUrl += currentUser._id;
        return (
            <Link className="nav-link me-auto w-auto" >
                <Link class="text-decoration-none text-body" to={profileUrl} href="/" >Profile <i className="bi bi-person-fill"></i></Link>
            </Link>
        )
    }

}
export default function Navigation() {
    let { currentUser } = useSelector((state) => state.user)
    if (currentUser) {
        sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
        sessionStorage.setItem('favCount', JSON.stringify(currentUser.favorites.length));
    }
    if (!currentUser) {
        currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
    }
    const dispatch = useDispatch()
    const handleLogout = () => {
        sessionStorage.removeItem('currentUser');
        sessionStorage.removeItem('favCount');
        dispatch(logoutThunk())
    }
    return (
        <Navbar className="nav-bg" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Barkery</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <SearchBox />
                    <Nav className="me-auto w-auto justify-content-end">

                        { !currentUser ? (
                            <Link to="/login" className="nav-link text-body">
                                Sign In
                            </Link> ) : (

                            <Link className="nav-link text-body" onClick={handleLogout}>
                            Logout
                            </Link>
                        )
                        }
                        {profileBtn(currentUser)}
                        <Link to="/cart" className="nav-link text-body">
                            Cart <i className="bi bi-cart-fill"></i>
                        </Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )


}