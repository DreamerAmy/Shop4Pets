import Button from 'react-bootstrap/Button';
import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Store } from '../../Store';

export default function ShippingAddressScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddres },
  } = state;

  const [receiver, setReceiver] = useState('');
  const [address, setAddress] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        receiver,
        address,
      },
    });
    localStorage.setItem(
      'shippingAddress',
      JSON.stringify({
        receiver,
        address,
      })
    );
    navigate('/payment');
  };
  return (
    <div className="row mt-2">
      <div className="col-2"> </div>
      <div className="col-8">
        <div className="mx-5">
          <Helmet>
            <title>Shipping Address</title>
          </Helmet>
          <h1 className="ShoppingCart_font">Shipping Address</h1>
          <form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label>Receiver</Form.Label>
              <Form.Control
                value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
                required
                placeholder="Mark Zarkerberg"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="address">
              <Form.Label>
                Address(inluding City, Post Code, City, Country){' '}
              </Form.Label>
              <Form.Control
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                placeholder="123 Country ST, San Jose, CA 95123, USA"
              />
            </Form.Group>

            <div className="mb-3">
              <Button
                className="ShiipingButton_style"
                variant="primary btn-warning"
                type="submit"
              >
                <span className="Button_font2">Continue</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
