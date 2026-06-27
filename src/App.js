import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <nav style={{ padding: 12, borderBottom: '1px solid #eee' }}>
            <Link to="/" style={{ marginRight: 12 }}>Home</Link>
            <Link to="/products" style={{ marginRight: 12 }}>Products</Link>
            <Link to="/cart">Cart</Link>
          </nav>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
  );
}

export default App;
