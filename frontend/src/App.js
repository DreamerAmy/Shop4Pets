
import './App.css';
import {BrowserRouter, Link} from "react-router-dom";
import { Routes, Route } from "react-router";
import ProfileScreen from './screens/ProfileScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BuyerProfileScreen from "./screens//ProfileScreen/BuyerProfileScreen.js"
import SellerProfileScreen from "./screens//ProfileScreen/SellerProfileScreen.js"
import AdminProfileScreen from "./screens//ProfileScreen/AdminProfileScreen.js"
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import SearchBox from "./components/SearchBox";
import {Container, Nav, Navbar} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import Button from "react-bootstrap/Button";
import './index.css'
import Navigation from "./components/Navigation";
<<<<<<< Updated upstream
import SigninScreen from "./screens/SigninScreen";
import Login from "./screens/Login";
import * as PropTypes from "prop-types";
=======
import Login from "./screens/Login";
import Register from "./screens/Register";
import CurrentUser from "./screens/currentUser";
>>>>>>> Stashed changes

function Provider(props) {
    return null;
}

Provider.propTypes = {children: PropTypes.node};

function App() {
  return (
<<<<<<< Updated upstream


      <BrowserRouter>
              <header>
                  <Navigation/>
                  <Container className="mt-3">
                      <Routes>
                          {/*<Route path="/product/:slug" element={<ProductScreen />} />*/}
                          {/*<Route path="/cart" element={<CartScreen />} />*/}
                          {/*<Route path="/search" element={<SearchScreen />} />*/}
                          <Route path="/Login/*" element={<Login/>} />
                          <Route path="/Signin/*" element={<SigninScreen/>} />
                          {/*<Route path="/signup" element={<SignupScreen />} />*/}
                          </Routes>
                          </Container>
              </header>
          </BrowserRouter>


=======
    <Provider store={store}>
      <CurrentUser>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/profile/*" element={<ProfileScreen />} />
          <Route path="/edit-profile/*" element={<ProfileEditScreen />} />
          <Route path="/order-history/*" element={<OrderHistoryScreen />} />
          <Route path="/order-detail/*" element={<OrderDetailScreen />} />
          {/* TODO: For profile testing purpose only */}
          {/* <Route path="/profile/*" element={<BuyerProfileScreen />} /> */}
          <Route path="/profile/seller" element={<SellerProfileScreen />} />
          <Route path="/profile/admin" element={<AdminProfileScreen />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/register" element={<Register />} />



        </Routes>
      </BrowserRouter>
      </CurrentUser>
    </Provider>
>>>>>>> Stashed changes
  );
}

export default App;
