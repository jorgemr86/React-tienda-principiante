import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Registro from './pages/Registro';
import Login from './pages/Login';
import { CartProvider } from './context/CartContext ';
import Home from './pages/Home'
import Cart from './pages/Cart';
import Navbar from './componentes/Navbar';
import Novedades from './pages/Novedades';
import Sujetadores from './pages/Sujetadores';
import Read from './pages/Read'

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Registro" element={<Registro />} />
         
          <Route path="/login" element={<Login />} />
          <Route path="/Sujetadores" element={<Sujetadores />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Novedades" element={<Novedades />} />
          <Route path="/Read" element={<Read />} />
        </Routes>
      </Router>
    
    </CartProvider>
  );
};

export default App;
