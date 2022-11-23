
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import ProfileScreen from './screens/ProfileScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BuyerProfileScreen from "./screens//ProfileScreen/BuyerProfileScreen.js"
import SellerProfileScreen from "./screens//ProfileScreen/SellerProfileScreen.js"
import AdminProfileScreen from "./screens//ProfileScreen/AdminProfileScreen.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<ProfileScreen />} />
        {/* TODO: For profile testing purpose only */}
        <Route path="/profile/buyer" element={<BuyerProfileScreen />} />
        <Route path="/profile/seller" element={<SellerProfileScreen />} />
        <Route path="/profile/admin" element={<AdminProfileScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
