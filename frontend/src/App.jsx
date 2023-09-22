import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Auctions from "./pages/Auctions";
import CreateAuction from "./pages/CreateAuction";
import Auction from "./pages/Auction";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { useSelector } from "react-redux";

function App() {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  return (
    <div>
      <Navbar />
      {/* body page starts here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/auctions"
          element={isAuthenticated ? <Auctions /> : <Login />}
        />
        <Route
          path="/createAuction"
          element={isAuthenticated ? <CreateAuction /> : <Login />}
        />
        <Route
          path="/auction/:id"
          element={isAuthenticated ? <Auction /> : <Login />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
