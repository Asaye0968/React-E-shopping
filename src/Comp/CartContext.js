import React, { createContext, useContext, useState } from 'react';
import All_product from '../Comp/image/all_product'; // Adjust path as needed

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addToCart = (item) => {
    setCart((prevCart) => ({
      ...prevCart,
      [item.id]: (prevCart[item.id] || 0) + 1 // Using 'id' to track quantity
    }));
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[item.id] > 1) {
        updatedCart[item.id] -= 1;
      } else {
        delete updatedCart[item.id];
      }
      return updatedCart;
    });
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [id, quantity]) => {
      const product = All_product.find((p) => String(p.id) === String(id)); // Ensure ID comparison
      return total + (product ? product.new_price * quantity : 0); // Calculate total price
    }, 0);
  };

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    getTotalPrice,
    products: All_product,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
