import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {Container} from "react-bootstrap";
import foodImage from "../../images/food2.jpg";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Display profile btn only user is logged in
const profileBtn = (currentUser) => {
    let profileUrl = "../profile/";
    if (currentUser) {
        // profileUrl += currentUser._id;
        return (
            <Link className="nav-link" >
                <Link to={profileUrl} href="/" >View My Profile</Link>
            </Link>
        )
    }
    return;
}

const Home = () => {
    const { currentUser } = useSelector((state) => state.user)
    console.log("home currentUser", currentUser);


    return (
        <>
            <Container>
                <div>
                    {profileBtn(currentUser)}
                    {
                        currentUser &&
                        <h5>Welcome {currentUser.name}!</h5>
                    }
                </div>

                <div>
                    <img className="img-fluid mt-1 mb-4" src={require("../../images/HomeBanner.png")}  alt="Home banner" />
                </div>

                <div>
                    <h4>Shop By Pet</h4>
                    <Row class="d-flex justify-content-evenly">
                        <Col><img src={require("../../images/catCategory.jpeg" )} alt="Cat Category" height={130}/></Col>
                        <Col><img src={require("../../images/dogCategory.jpeg" )} alt="Dog Category" height={130} /></Col>
                        <Col><img src={require("../../images/smallPetCategory.jpeg" )} alt="Small Pet Category" height={130}/></Col>
                        <Col><img src={require("../../images/fishCategory.jpeg" )} alt="Fish Category" height={130} /></Col>
                    </Row>
                </div>

                <div>
                    <h4 className="mt-4">Discover Pet Favorites</h4>
                </div>


            </Container>
        </>
    )
}

export default Home;