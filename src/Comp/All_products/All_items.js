import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import rating from '../image/rating_starts.png';
import add from '../image/add_icon_green.png';
import { FaRegHeart } from "react-icons/fa";
import "./All_items.css"
import remove from '../image/add_icon_white.png';

const All_items = (props) => {
  const navigate = useNavigate(); // Get the navigate function

  const handleImageClick = (id) => {
    navigate(`/product/${id}`); // Navigate to the product details page
  };

  return (
    <div className='products'>
      <div className='image'>
        <img 
          src={props.image} 
          alt={props.name} 
          onClick={() => handleImageClick(props.id)} // Add click handler
        />
      </div>
      <h3>{props.name}</h3>
      <div className='price'>
        <p>New Price: ${props.new_price}</p>
        {props.old_price && <p>Old Price: <s>${props.old_price}</s></p>}
      </div>
      <div className='container'>
        <div className='btn'>
          <img 
            src={add} 
            alt="Add" 
            onClick={props.onAdd} 
            className='add-icon' // Add class for styling if needed
          />
          <img 
            src={remove} 
            alt="Remove" 
            onClick={props.onRemove} 
            className='remove-icon' // Add class for styling if needed
          />
        </div>
        <div className='quantity'>
          <p>Quantity: {props.quantity}</p>
        </div>
        <div className='rating'>
          <img className='heart' src={rating} alt='Rating' />
          <FaRegHeart  
            className='heart-icon' 
            style={{marginTop:'15px', fontSize:'1.3rem'}}
            onClick={props.onHeartClick} // Add heart click handler
          />
        </div>
      </div>
    </div>
  );
};

export default All_items;
