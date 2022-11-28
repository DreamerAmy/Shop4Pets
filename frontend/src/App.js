
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";

import ProfileScreen from './screens/ProfileScreen';
import SellerProfileScreen from "./screens//ProfileScreen/SellerProfileScreen.js"
import AdminProfileScreen from "./screens//ProfileScreen/AdminProfileScreen.js"
import ProfileEditScreen from "./screens/ProfileEditScreen/ProfileEditScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen"
import OrderDetailScreen from "./screens/OrderDetailScreen"

import UserReducer from "./reducers/UserReducer";
import OrderReducer from "./reducers/OrderReducer";
import Navigation from "./components/Navigation";

const store = configureStore({
  reducer: {
    user: UserReducer,
    order: OrderReducer
  }
});

function App() {
  return (
    <Provider store={store}>
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



        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
