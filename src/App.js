import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "../src/modules/Home";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./modules/SingleProduct";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SingleProduct/:id" element={<SingleProduct />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
