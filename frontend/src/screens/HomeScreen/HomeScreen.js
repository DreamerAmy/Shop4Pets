import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import React, { useEffect, useReducer } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeProduct from "./HomeProduct";
import { findProductThunk } from "../../services/ProductThunks";
import './home.css'
import RecommendProduct from "./RecommendProduct";



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
                    {
                        currentUser &&
                        <h5 className="mt-4">Welcome {currentUser.name}!</h5>
                    }
                </div>

                <div>
                    <img className="img-fluid mt-1 mb-4" src={require("../../images/HomeBanner.png")} alt="Home banner" />
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