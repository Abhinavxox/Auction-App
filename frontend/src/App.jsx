import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Auctions from "./pages/Auctions";
import CreateAuction from "./pages/CreateAuction";

function App() {
  return (
    <div>
      <Navbar />
      {/* body page starts here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/createAuction" element={<CreateAuction />} />
      </Routes>
    </div>
  );
}

export default App;
