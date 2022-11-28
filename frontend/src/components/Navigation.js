import {Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import SearchBox from "./SearchBox";
import {Link} from "react-router-dom";
import './index.css'


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