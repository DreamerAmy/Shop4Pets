import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
import './index.css'
import { logoutThunk } from "../services/UserThunks";
import {useDispatch, useSelector} from "react-redux";

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
                            <Link to="/login" className="nav-link">
                                Sign In
                            </Link> ) : (

                            <Link className="nav-link" onClick={handleLogout}>
                            Logout
                            </Link>
                        )
                        }
                        <Link to="/cart" className="nav-link">
                            Cart <i className="bi bi-cart"></i>
                        </Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )


}