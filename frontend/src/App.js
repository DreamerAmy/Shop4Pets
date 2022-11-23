
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";

import ProfileScreen from './screens/ProfileScreen';
import BuyerProfileScreen from "./screens//ProfileScreen/BuyerProfileScreen.js"
import SellerProfileScreen from "./screens//ProfileScreen/SellerProfileScreen.js"
import AdminProfileScreen from "./screens//ProfileScreen/AdminProfileScreen.js"
import BuyerReducer from "./screens/ProfileScreen/BuyerReducer";
import BuyerEditScreen from "./screens/ProfileScreen/BuyerEditScreen";


const store = configureStore({
  reducer: {
    buyer: BuyerReducer
  }
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<ProfileScreen />} />
          {/* TODO: For profile testing purpose only */}
          <Route path="/profile/buyer" element={<BuyerProfileScreen />} />
          <Route path="/profile/seller" element={<SellerProfileScreen />} />
          <Route path="/profile/admin" element={<AdminProfileScreen />} />
          <Route path="/profile/buyer/edit-profile" element={<BuyerEditScreen />} />


        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
