import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../../screens/ProfileScreen/index.css";
import { Link } from "react-router-dom";
import {Card} from "react-bootstrap";
import './home.css'

const RecommendProduct = ({ product }) => {

    let productUrl = null;
    if (product._id) {
        productUrl = "../product/" + product._id
    }

    return (
        <>
            <Card>
                <Link to={productUrl} href="/" className="nav-link">
                    <img src={product.image} className="mx-auto d-block card-img-top product-img" alt={product.productName} />
                    <Card.Body>
                        <Card.Title className="product-title text-center">{product.productName}</Card.Title>
                        <Card.Text className="product-price text-center">${product.price}</Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        </>
    );
};
export default RecommendProduct;
