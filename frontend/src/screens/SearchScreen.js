import React, { useEffect, useReducer } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { getError } from '../utils';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import ListGroup from 'react-bootstrap/ListGroup';
import { Card, Container } from 'react-bootstrap';

const API_BASE = 'http://localhost:4000/api';
const YOUTUBE_API_KEY = 'AIzaSyDorhsaxEhnOIes5MzqIr0JIzFKiUNgwbU';
const YOUTUBE_URL =
  'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=' +
  YOUTUBE_API_KEY;

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default function SearchScreen() {
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const query = sp.get('query') || 'all';
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${API_BASE}/product/search?query=${query}`
        );
        let youtube_items = [];

        if (query && query !== 'all') {
          const response = await axios.get(`${YOUTUBE_URL}&q=${query}`);
          const youtubedata = response.data;
          youtube_items = youtubedata.items.map((item) => {
            return {
              videoId: item.id.videoId,
              title: item.snippet.title,
              description: item.snippet.description,
              thumbnail: item.snippet.thumbnails.default,
            };
          });
        }
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: { products: data, youtubeItems: youtube_items },
        });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(error),
        });
      }
    };
    fetchData();
  }, [error, loading, query]);
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <Container>
      <div>
        <Helmet>
          <title>Search Products</title>
        </Helmet>
        {products.products.length === 0 &&
        products.youtubeItems.length === 0 ? (
          <MessageBox>
            Search Result is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <div className="container">
            <Card>
              <Card.Body>
                <Card.Title>Youtube Search Results</Card.Title>
                <ListGroup variant="flush">
                  {products.youtubeItems.map((item) => (
                    <ListGroup.Item key={item.videoId}>
                      <Row className="align-items-center">
                        <Col md={2}>
                          <img src={item.thumbnail.url} />
                        </Col>
                        <Col md={4}>
                          <a
                            href={`https://www.youtube.com/watch?v=${item.videoId}`}
                          >
                            {item.title}
                          </a>
                        </Col>
                        <Col md={6}>
                          <span>Description: {item.description}</span>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>Search Results</Card.Title>
                <ListGroup variant="flush">
                  {products.products.map((item) => (
                    <ListGroup.Item key={item._id}>
                      <Row className="align-items-center">
                        <Col md={6}>
                          <Link to={`/product/${item._id}`}>
                            {item.productName}
                          </Link>
                        </Col>
                        <Col md={3}>
                          <span>Brand: {item.brand}</span>
                        </Col>
                        <Col md={3}>Unit Price: ${item.price}</Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    </Container>
  );
}
