import React, { useState } from 'react';
import All_product from '../image/all_product';
import All_items from './All_items';
import { useCart } from '../CartContext';
import { FaEye, FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './All_products.css'

const All_products = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [notification, setNotification] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const filteredProducts = All_product.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const handleImageClick = (id) => {
    navigate(`/product/${id}`); // Navigate to the product details page
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    setNotification('Cart has been added');
    setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
  };

  const handleHeartClick = (item) => {
    setNotification('You loved it');
    setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
  };

  return (
    <div>
      <h3>OUR PRODUCTS</h3>
      <div className="category-buttons">
        <button onClick={() => setSelectedCategory('all')}>All</button>
        <button onClick={() => setSelectedCategory('women')}>Women</button>
        <button onClick={() => setSelectedCategory('men')}>Men</button>
        <button onClick={() => setSelectedCategory('kid')}>Kids</button>
      </div>

      {notification && <div className="notification">{notification}</div>}

      <div className="collection-container">
        {filteredProducts.map((item) => (
          <div key={item.id} className="product-card">
            {item.old_price && (
              <div className="discount-badge">
                {Math.round(((item.old_price - item.new_price) / item.old_price) * 100)}% OFF
              </div>
            )}
            <All_items
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
              quantity={cart[item.id] || 0}
              onAdd={() => handleAddToCart(item)}
              onRemove={() => removeFromCart(item)}
              onImageClick={() => handleImageClick(item.id)} // Pass handleImageClick to All_items
              onHeartClick={() => handleHeartClick(item)} // Pass handleHeartClick to All_items
            />
            <button className="quick-view" onClick={() => handleImageClick(item.id)}><FaEye /></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default All_products;
