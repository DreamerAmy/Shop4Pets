
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
import UserReducer from "./screens/ProfileScreen/UserReducer";
import ProfileEditScreen from "./screens/ProfileScreen/ProfileEditScreen";

const store = configureStore({
  reducer: {
    user: UserReducer
  }
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/edit-profile/*" element={<ProfileEditScreen />} />
          <Route path="/profile/*" element={<ProfileScreen />} />
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
