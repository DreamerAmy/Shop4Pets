<<<<<<< Updated upstream
import {Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
=======
import {Badge, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
>>>>>>> Stashed changes
import SearchBox from "./SearchBox";
import {Link} from "react-router-dom";
import './index.css'
<<<<<<< Updated upstream

=======
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
                    <Nav className="me-auto w-130 justify-content-center">

                        {currentUser ? (
                            <NavDropdown title={currentUser.name} >
                                {/*<LinkContainer className="nav-link" to="../profile">*/}
                                {/*    <NavDropdown.Item>Profile <i className="bi bi-person"></i></NavDropdown.Item>*/}
                                {/*</LinkContainer>*/}
                                <Link className="nav-link" >
                                    <Link to="../profile" href="/" >Profile <i className="bi bi-person"></i></Link>
                                </Link>
                                <NavDropdown.Divider />
                                <Link className="nav-link" onClick={handleLogout}>
                                    Logout
                                </Link>
                            </NavDropdown>
                            ) : (
                                <Link to="/login" className="nav-link">
                            Sign In
                        </Link>)}

                        {/*<Link className="nav-link" onClick={handleLogout}>*/}
                        {/*    Logout*/}
                        {/*</Link>*/}
                    </Nav>
                    <Nav className="me-auto w-130 justify-content-end">
                        <Link to="/cart" className="nav-link font-weight-bold">
                            Cart <i className="bi bi-cart"></i>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
>>>>>>> Stashed changes

export default function Navigation (){

    return(
    <Navbar className="nav-bg" expand="lg">
        <Container>
            <LinkContainer to="/">
                <Navbar.Brand>Barkery</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <SearchBox/>
                <Nav className="me-auto w-130 justify-content-end">
                    <Link to="/Login" className="nav-link">
                        Sign In
                    </Link>
                    <Link to="/cart" className="nav-link">
                        Cart
                    </Link>
                </Nav>
            </Navbar.Collapse>

        </Container>
    </Navbar>
    )


}