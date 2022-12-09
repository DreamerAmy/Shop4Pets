import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Store } from '../../Store';

export default function PaymentScreen() {
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [creditCardName, setCreditCardName] = useState('');
  const [creditCardExpiration, setCreditCardExpiration] = useState('');
  const [creditCardSecurityCode, setcreditCardSecurityCode] = useState('');
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress, paymentMethod },
  } = state;

  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: 'SAVE_PAYMENT_METHOD',
      payload: {
        creditCardNumber,
        creditCardName,
        creditCardExpiration,
        creditCardSecurityCode,
      },
    });
    localStorage.setItem(
      'paymentMethod',
      JSON.stringify({
        creditCardNumber,
        creditCardName,
        creditCardExpiration,
        creditCardSecurityCode,
      })
    );
    navigate('/placeorder');
  };
  return (
    <div>
      <div className="row mt-2">
        <div className="col-2"> </div>
        <div className="col-8">
          <div className="container small-container">
            <Helmet>
              <title>Payment Method</title>
            </Helmet>
            <h1 className="my-3 ShoppingCart_font">Payment Method</h1>

            <Form onSubmit={submitHandler}>
              <div className="mb-3">
                <Form.Group className="mb-3" controlId="creditCardNumber">
                  <Form.Label>Credit Card Number</Form.Label>
                  <Form.Control
                    value={creditCardNumber}
                    onChange={(e) => setCreditCardNumber(e.target.value)}
                    required
                    placeholder="1234567812345678"
                  />
                </Form.Group>
              </div>
              <div className="mb-3">
                <Form.Group className="mb-3" controlId="creditCardName">
                  <Form.Label>Name on Card</Form.Label>
                  <Form.Control
                    value={creditCardName}
                    onChange={(e) => setCreditCardName(e.target.value)}
                    required
                    placeholder="Mark Zarkerberg"
                  />
                </Form.Group>
              </div>
              <div className="mb-3">
                <Form.Group className="mb-3" controlId="creditCardExpiration">
                  <Form.Label>Expiration Date (e.g. 01/24) </Form.Label>
                  <Form.Control
                    value={creditCardExpiration}
                    onChange={(e) => setCreditCardExpiration(e.target.value)}
                    required
                    placeholder="01/24"
                  />
                </Form.Group>
              </div>
              <div className="mb-3">
                <Form.Group className="mb-3" controlId="creditCardSecurityCode">
                  <Form.Label>Security Code </Form.Label>
                  <Form.Control
                    value={creditCardSecurityCode}
                    onChange={(e) => setcreditCardSecurityCode(e.target.value)}
                    required
                    placeholder="123"
                  />
                </Form.Group>
              </div>

              <div className="mb-3">
                <Button className="ShiipingButton_style" type="submit">
                  <span className="Button_font2">Continue</span>
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
