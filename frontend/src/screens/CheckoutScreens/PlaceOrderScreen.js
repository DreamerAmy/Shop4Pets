import Axios from 'axios';
import React, { useContext, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { toast } from 'react-toastify';
import { getError } from '../../utils';
import { Store } from '../../Store';
import LoadingBox from '../../components/LoadingBox';
const API_BASE = 'http://localhost:4000/api';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_REQUEST':
      return { ...state, loading: true };
    case 'CREATE_SUCCESS':
      return { ...state, loading: false };
    case 'CREATE_FAIL':
      return { ...state, loading: false };
    default:
      return state;
  }
};


export default function PlaceOrderScreen() {
  const navigate = useNavigate();
  let { currentUser } = useSelector((state) => state.user);
  if (!currentUser) {
    currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
  }
  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
  });

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100; // 123.2345 => 123.23
  cart.itemsPrice = round2(
    cart.cartItems.reduce((a, c) => a + c.quantity * c.price, 0)
  );

  cart.shippingPrice = cart.itemsPrice > 100 ? round2(0) : round2(10);
  cart.taxPrice = round2(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  const placeOrderHandler = async () => {
    try {
      dispatch({ type: 'CREATE_REQUEST' });

      const { data } = await Axios.post(`${API_BASE}/order`, {
        buyerId: currentUser ? currentUser._id : '0',
        totalAmount: cart.totalPrice,
        date: new Date().toISOString().slice(0, 10),
        receiver: cart.shippingAddress.receiver,
        address: cart.shippingAddress.address,
        productBought: cart.cartItems.map((item) => item._id),
        productQuantity: cart.cartItems.map((item) => item.quantity),
        creditCardName: cart.paymentMethod.creditCardName,
        creditCardNumber: cart.paymentMethod.creditCardNumber,
        creditCardExpiration: cart.paymentMethod.creditCardExpiration,
        creditCardSecurityCode: cart.paymentMethod.creditCardSecurityCode,
      });

      const { info } = await Axios.post(`${API_BASE}/sellerhist`, arrayOfProduct)

      ctxDispatch({ type: 'CART_CLEAR' });
      dispatch({ type: 'CREATE_SUCCESS' });
      localStorage.removeItem('cartItems');
      navigate(`/order/${data._id}`);
    } catch (err) {
      dispatch({ type: 'CREATE_FAIL' });
      toast.error(getError(err));
    }
  };

  let arrayOfProduct = []
  for (let i = 0; i < cart.cartItems.length; i++) {
    arrayOfProduct = [...arrayOfProduct, {
      buyerId: currentUser ? currentUser._id : '0',
      sellerId: cart.cartItems[i].sellerId,
      date: new Date().toISOString().slice(0, 10),
      receiver: cart.shippingAddress.receiver,
      address: cart.shippingAddress.address,
      productBought: cart.cartItems[i]._id,
      productQuantity: cart.cartItems[i].quantity
    }]
  }

  return (
    <div className="row mt-2">
      <div className="col-2"> </div>
      <div className="col-8">
        <div className="mx-5">
          <Helmet>
            <title>Preview Order</title>
          </Helmet>
          <h1 className="my-3 ShoppingCart_font">Preview Order</h1>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title className="PreviewOrder_font">Shipping</Card.Title>
              <Card.Text>
                <strong>Name:</strong> {cart.shippingAddress.receiver} <br />
                <strong>Address: </strong> {cart.shippingAddress.address}
              </Card.Text>
              <Link to="/shipping" className="edit_colr">
                Edit
              </Link>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title className="PreviewOrder_font">Payment</Card.Title>
              <Card.Text>
                <strong>Credit Card Name:</strong>{' '}
                {cart.paymentMethod.creditCardName} <br />
                <strong>Credit Card Number:</strong>{' '}
                {cart.paymentMethod.creditCardNumber} <br />
                <strong>Credit Card Expiration Date:</strong>{' '}
                {cart.paymentMethod.creditCardExpiration} <br />
                <strong>Credit Card Security Code:</strong>{' '}
                {cart.paymentMethod.creditCardSecurityCode}
              </Card.Text>
              <Link to="/payment" className="edit_colr">
                Edit
              </Link>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title className="PreviewOrder_font">Items</Card.Title>
              <ListGroup variant="flush">
                {cart.cartItems.map((item) => (
                  <ListGroup.Item key={item._id}>
                    <Row className="align-items-center">
                      <Col md={6}>
                        <Link to={`/product/${item._id}`}>
                          {item.productName}
                        </Link>
                      </Col>
                      <Col md={3}>
                        <span>Qty: {item.quantity}</span>
                      </Col>
                      <Col md={3}>Unit Price: ${item.price}</Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Link to="/cart" className="edit_colr">
                Edit
              </Link>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title className="PreviewOrder_font">
                Order Summary
              </Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Items</Col>
                    <Col>${cart.itemsPrice.toFixed(2)}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Shipping</Col>
                    <Col>${cart.shippingPrice.toFixed(2)}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Tax</Col>
                    <Col>${cart.taxPrice.toFixed(2)}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong> Order Total</strong>
                    </Col>
                    <Col>
                      <strong>${cart.totalPrice.toFixed(2)}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      className="Button_style Button_size"
                      type="button"
                      variant="primary btn-warning"
                      onClick={placeOrderHandler}
                      disabled={cart.cartItems.length === 0}
                    >
                      <span className="Button_font2">Place Order</span>
                    </Button>
                  </div>
                  {loading && <LoadingBox></LoadingBox>}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
