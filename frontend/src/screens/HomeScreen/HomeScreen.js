import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import React, { useEffect, useReducer } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";
import HomeProduct from "./HomeProduct";
import axios from "axios";
import product from "./HomeProduct";
import ProductItem from "../../components/ProductComponent/ProductItem";
import { findProductThunk } from "../../services/ProductThunks";
import './home.css'
import RecommendProduct from "./RecommendProduct";


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

}


const Home = () => {
    let { currentUser } = useSelector((state) => state.user)
    console.log("home currentUser", currentUser);
    if (currentUser) {
        sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
        sessionStorage.setItem('favCount', JSON.stringify(currentUser.favorites.length));
    }
    if (!currentUser) {
        currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
    }


    const { product } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    useEffect(() => { dispatch(findProductThunk()); }, []);


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
                    <img className="img-fluid mt-1 mb-4" src={require("../../images/HomeBanner.png")} alt="Home banner" />
                </div>

                <div>
                    <h4>Shop By Pet Categories</h4>
                    <Row class="d-flex justify-content-between img-fluid">
                        <Col><img src={require("../../images/catCategory.jpeg")} alt="Cat Category" height={130} /></Col>
                        <Col><img src={require("../../images/dogCategory.jpeg")} alt="Dog Category" height={130} /></Col>
                        <Col><img src={require("../../images/smallPetCategory.jpeg")} alt="Small Pet Category" height={130} /></Col>
                        <Col><img src={require("../../images/fishCategory.jpeg")} alt="Fish Category" height={130} /></Col>
                    </Row>
                </div>

                {
                    !currentUser &&
                    <div>
                        <h4 className="mt-4">Discover Pet Favorites</h4>
                        <div>
                            <Row>
                                {product.map((product) => (
                                    <Col key={product._id} sm={6} md={4} lg={3} className="mb-3">
                                        <HomeProduct product={product}></HomeProduct>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                }
                {
                    currentUser &&
                    <div>
                        <h4 className="mt-4">Recommendation For You</h4>
                        <div>
                            <Row>
                                {product.map((product) => (
                                    <Col key={product._id} sm={6} md={4} lg={3} className="mb-3">
                                        <RecommendProduct product={product}></RecommendProduct>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                }

            </Container>
        </>
    )
}

export default Home;