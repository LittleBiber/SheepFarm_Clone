import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Map, Inventory, Luckybox, Shop } from "./pages";
import { MetamaskLogin } from "./components/Common";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="luckybox" element={<Luckybox />} />
        <Route path="shop" element={<Shop />} />
        <Route path="map" element={<Map />} />
        <Route path="metamast_login" element={<MetamaskLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
