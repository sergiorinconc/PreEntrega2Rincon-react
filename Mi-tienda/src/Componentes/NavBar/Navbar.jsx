import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import '../../styles/App.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="navbar-left">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/category/ropa">Ropa</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/electronica">Instrumentos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/hogar">Tickets</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-center">
          <Link to="/">
            <img src="/ojo.png" alt="Logo" className="navbar-logo" />
          </Link>
          <Link className="navbar-name" to="/">El Mercado de los Vrykul</Link>
        </div>
        <div className="navbar-right">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;



