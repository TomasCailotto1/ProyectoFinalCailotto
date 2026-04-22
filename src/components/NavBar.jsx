import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget.jsx';

const NavBar = () => {
  return (
    <nav style={{display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#eee'}}>
      <h2>Mi Tienda</h2>
      <div>
        <Link to="/">Inicio</Link> | 
        <Link to="/category/remeras">Remeras</Link> | 
        <Link to="/category/pantalones">Pantalones</Link> | 
        <Link to="/category/zapatillas">Zapatillas</Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
