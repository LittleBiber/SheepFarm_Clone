import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Landing from "./pages/Landing";
import Inventory from "./pages/Inventory";
import Luckybox from "./pages/Luckybox";
import Shop from "./pages/Shop";
import Map from "./pages/Map";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="luckybox" element={<Luckybox />} />
        <Route path="shop" element={<Shop />} />
        <Route path="map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
