import React from "react";
import { useState } from "react";
import "./All_products.css";
import All_product from "../image/all_product";
import All_items from './All_items';
import { useCart } from "../CartContext";

const All_products = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  
  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter the products based on selected category
  const filteredProducts = All_product.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  return (
    <div>
      <h3>OUR PRODUCTS</h3>
      {/* Category Buttons */}
      <div className="category-buttons">
        <button onClick={() => setSelectedCategory('all')}>All</button>
        <button onClick={() => setSelectedCategory('women')}>Women</button>
        <button onClick={() => setSelectedCategory('men')}>Men</button>
        <button onClick={() => setSelectedCategory('kid')}>Kids</button>
      </div>

      <div className="collection-container">
        {filteredProducts.map((item) => (
          <div key={item.id} className="product-card">
            {/* Badge for discounts or new products */}
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
              onAdd={() => addToCart(item)}
              onRemove={() => removeFromCart(item)}
            />
            {/* Quick View Button */}
            <button className="quick-view">Quick View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default All_products;
