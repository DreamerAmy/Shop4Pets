import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import ProfileScreen from './screens/ProfileScreen';
import { configureStore } from '@reduxjs/toolkit';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SellerProfileScreen from "./screens/ProfileScreen/seller/SellerProfileScreen";
import BuyerProfileScreen from "./screens/ProfileScreen/BuyerProfileScreen";
import AdminProfileScreen from "./screens/ProfileScreen/AdminProfileScreen";
import SellerReducer from "./screens/ProfileScreen/seller/SellerReducer";
import {Provider} from "react-redux";
import SellerEditScreen from "./screens/ProfileScreen/seller/SellerEditScreen";
import SellerViewDetail from "./screens/ProfileScreen/seller/seller-view-detail";
import SellerMyItems from "./screens/ProfileScreen/seller/seller-items";
import SellerMyCos from "./screens/ProfileScreen/seller/seller-customers";

const store = configureStore({
    reducer: {
        seller: SellerReducer
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
                  <Route path="seller-edit-profile" element={<SellerEditScreen />} />
                  <Route path="seller-view-detail" element={<SellerViewDetail />} />
                  <Route path="seller-my-items" element={<SellerMyItems />} />
                  <Route path="seller-my-customers" element={<SellerMyCos />} />

                  <Route path="/profile/admin" element={<AdminProfileScreen />} />

              </Routes>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
