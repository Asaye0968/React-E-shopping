import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';  // Optional: For custom styles
import { useCart } from './CartContext';
import { FaShoppingBag } from "react-icons/fa";

const Nav = () => {
  const { cart } = useCart();
  const totalItems = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" style={{color:'#ff7200',textDecoration:'none',fontSize:'18px',fontWeight:'700'}}>
          Ase shopping {/* Replace with your logo */}
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className='links'>Home</Link>
        </li>
        <li>
          <Link to="/All_products" className='links'>Shop</Link>
        </li>
        <li>
          <Link to="/about" className='links'>About</Link>
        </li>
        <li>
          <Link to="/Cart" className='links'><FaShoppingBag />
          ({totalItems})</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
