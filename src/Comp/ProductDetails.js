import React from 'react';
import { useParams } from 'react-router-dom';
import All_product from '../Comp/image/all_product'; // Ensure this path is correct
import './ProductDetails.css'; // Import your CSS file

const ProductDetails = () => {
  const { id } = useParams();
  const product = All_product.find(p => p.id === parseInt(id)); // Ensure ID comparison

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p className="price">Price: ${product.new_price}</p>
      {product.old_price && <p className="old-price">Old Price: <s>${product.old_price}</s></p>}
      <p className="description">Description: {product.description}</p> {/* Assuming you have a description */}
      <div className="buttons">
      <a href="/cart" className="addto-cart">Goto_Cart</a>
      <a href="/All_products" className="back-button">Back to Products</a>
      </div>
    </div>
  );
};

export default ProductDetails;
