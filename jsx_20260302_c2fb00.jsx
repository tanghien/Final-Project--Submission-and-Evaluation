import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>Bring nature home with our beautiful collection of houseplants</p>
        <Link to="/products" className="get-started-btn">Get Started</Link>
      </div>
    </div>
  );
};

export default App;