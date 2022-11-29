// /profile -> index.js
// index.js logged? or not? => display different Buyer/Seller/Admin page
// shop/profile
// import { BrowserRouter, Link } from "react-router-dom";
// import { Routes, Route } from "react-router";
// import BuyerScreenScreen from "./BuyerProfileScreen.js"
import React from 'react';
import './index.css';

const ProfileScreen = () => {
  return (
    <div className="row mt-2">
      <div className="col-3">left</div>
      <div className="col-6" style={{ position: 'relative' }}>
        {/* TODO: add if */}
      </div>
      <div className="col-3">right</div>
    </div>
  );
};

export default ProfileScreen;
