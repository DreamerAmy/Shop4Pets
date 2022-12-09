import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
import './index.css'
import { logoutThunk } from "../services/UserThunks";
import { useDispatch } from "react-redux";

export default function Navigation() {
    const dispatch = useDispatch()
    const handleLogout = () => {
        sessionStorage.removeItem('currentUser');
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
                    <Nav className="me-auto w-130 justify-content-end">
                        <Link to="/login" className="nav-link">
                            Sign In
                        </Link>
                        <Link to="/cart" className="nav-link">
                            Cart
                        </Link>
                        <Link className="nav-link" onClick={handleLogout}>
                            Logout
                        </Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )


}