import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Electronics from './pages/category/Electronics';
import Fashion from './pages/category/Fashion';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartContext';

const App = () => (
  <Router>
    <GlobalStyles />
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/electronics" element={<Electronics />} />
        <Route path="/category/fashion" element={<Fashion />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </CartProvider>
  </Router>
);

export default App;
