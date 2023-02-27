// Importing UI elements and react elements
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importing components
import Layout from './components/layout/Layout';

// Importing pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from "./pages/Cart";
import Checkout from './pages/Checkout'
import NotFound from './pages/404';

// Importing style 
import './index.css'

function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
  );
}

export default App;
