import React from 'react';
import { useCart } from './CartContext';
import addIcon from '../Comp/image/add_icon_green.png'; // Adjust path as needed
import removeIcon from '../Comp/image/add_icon_white.png'; // Adjust path as needed
import './Cart.css';
import { CiLogout } from "react-icons/ci";

import { Link } from 'react-router-dom';
const Cart = () => {
  const { cart, addToCart, removeFromCart, getTotalPrice, products } = useCart();

  return (
    <div className='cart'>
      <h3>Your Cart</h3>
      {Object.keys(cart).length === 0 ? (<>
        <p>Your cart is empty</p>
        <Link to="/All_products" style={{padding:'10px',backgroundColor:'#ff7200',maxWidth:'120px',marginLeft:'30px',textDecoration:'none',fontWeight:'800'}} > 
        <CiLogout/>  Shop Now</Link>
        </>
      ) : (
        <div>
          <ul>
            {Object.entries(cart).map(([id, quantity]) => {
              const product = products.find((p) => String(p.id) === String(id)); // Ensure both IDs are strings
              return product ? (
                <li key={id} className="cart-item">
                  <img  src={product.image} alt={product.name} className="cart-item-image" /> {/* Use product name for alt */}
                  <div className="cart-item-details">
                    <p className='name'>{product.name}</p> {/* Display product name */}
                    <p>Price: ${product.new_price.toFixed(2)}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Total: ${(product.new_price * quantity).toFixed(2)}</p>
                    <button onClick={() => addToCart(product)}>
                      <img src={addIcon} alt="Add" />
                    </button>
                    <button onClick={() => removeFromCart(product)}>
                      <img src={removeIcon} alt="Remove" />
                    </button>
                  </div>
                </li>
              ) : null;
            })}
          </ul>
          <h4>Total Price: ${getTotalPrice().toFixed(2)}</h4>
        </div>
      )}
    </div>
  );
};

export default Cart;
