// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginData.username && loginData.password) {
      setIsLoggedIn(true);
    } else {
      alert('Please enter both username and password.');
    }
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  if (!isLoggedIn) {
    return <Login loginData={loginData} setLoginData={setLoginData} onSubmit={handleLoginSubmit} />;
  }

  return (
    
      <div className="App">
        
        <Navbar cartCount={cartItems.length} />
          <Routes>
          <Route path="/orders" element={<Orders />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/" element={<ProductList products={products} onAddToCart={handleAddToCart} onViewDetails={setSelectedProduct} />} />
          <Route path="/details" element={<ProductDetails product={selectedProduct} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} onRemove={handleRemoveFromCart} />} />
        </Routes>
      </div>
    
  );
}

export default App;
