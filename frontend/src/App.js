import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// import { useContext } from 'react';
import ProfileScreen from './screens/ProfileScreen';

import ProfileEditScreen from './screens/ProfileEditScreen/ProfileEditScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderDetailScreen from './screens/OrderDetailScreen';
import ShippingAddressScreen from './screens/CheckoutScreens/ShippingAddressScreen';
import PaymentScreen from './screens/CheckoutScreens/PaymentScreen';
import PlaceOrderScreen from './screens/CheckoutScreens/PlaceOrderScreen';
import CartScreen from './screens/CheckoutScreens/CartScreen';
import OrderScreen from './screens/CheckoutScreens/OrderScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import UserReducer from './reducers/UserReducer';
import SellerReducer from "./reducers/SellerReducer";
import OrderReducer from './reducers/OrderReducer';
import ProductReducer from './reducers/ProductReducer';
import Navigation from './components/Navigation';
import Register from "./screens/Register";
import Login from "./screens/Login";
import Home from "./screens/HomeScreen/HomeScreen";
import CurrentUser from "./screens/currentUser";
import ProductScreen from "./screens/ProductScreen";
import SellerProfileScreen from "./screens/ProfileScreen/seller/SellerProfileScreen";
import AdminProfileScreen from "./screens/ProfileScreen/AdminProfileScreen";
// import UserListScreen from "./screens/UserListScreen";

const store = configureStore({
  reducer: {
    user: UserReducer,
    seller: SellerReducer,
    order: OrderReducer,
    orderItem: OrderReducer,
    product: ProductReducer,
    productItem: ProductReducer
  },
});

function App() {
  return (
    <Provider store={store}>
      <CurrentUser>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/profile/*" element={<ProfileScreen />} />
            <Route path="/edit-profile/*" element={<ProfileEditScreen />} />
            <Route path="/order-history/*" element={<OrderHistoryScreen />} />
            <Route path="/order-detail/*" element={<OrderDetailScreen />} />
            <Route path="/favorites/*" element={<FavoritesScreen />} />
            <Route path="/product/*" element={<ProductScreen />} />
            {/* <Route path="/user-list/*" element={<UserListScreen />} /> */}
            <Route path="/profile/seller" element={<SellerProfileScreen />} />
            <Route path="/profile/admin" element={<AdminProfileScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/shipping" element={<ShippingAddressScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/order/:id" element={<OrderScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </CurrentUser>
    </Provider>
  );
}

export default App;
