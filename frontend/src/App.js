import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import { useContext } from 'react';
import ProfileScreen from './screens/ProfileScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BuyerProfileScreen from './screens//ProfileScreen/BuyerProfileScreen.js';
import SellerProfileScreen from './screens//ProfileScreen/SellerProfileScreen.js';
import AdminProfileScreen from './screens//ProfileScreen/AdminProfileScreen.js';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import CartScreen from './screens/CartScreen';
import OrderScreen from './screens/OrderScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        {/* TODO: For profile testing purpose only */}
        <Route path="/profile/buyer" element={<BuyerProfileScreen />} />
        <Route path="/profile/seller" element={<SellerProfileScreen />} />
        <Route path="/profile/admin" element={<AdminProfileScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/shipping" element={<ShippingAddressScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/order/:id" element={<OrderScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
