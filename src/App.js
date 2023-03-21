import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import CartPage from "./components/CartPage";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Product />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};

export default App;
