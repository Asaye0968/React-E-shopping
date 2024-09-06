import React from 'react';
import rating from '../image/rating_starts.png';
import add from '../image/add_icon_green.png';
import remove from '../image/add_icon_white.png';
import './All_items.css';
import { FaRegHeart } from "react-icons/fa";

const All_items = (props) => {
  return (
    <div className='products'>
      <div className='image'>
        <img src={props.image} alt={props.name} />
      </div>
      <h3>{props.name}</h3>
      <div className='price'>
        <p>New Price: ${props.new_price}</p>
        {props.old_price && <p>Old Price: <s>${props.old_price}</s></p>}
      </div>
      <div className='container'>
        <div className='btn'>
          <img src={add} alt="Add" onClick={props.onAdd} />
          <img src={remove} alt="Remove" onClick={props.onRemove} />
        </div>
        <div className='quantity'>
          <p>Quantity: {props.quantity}</p>
        </div>
        <div className='rating'>
          <img className='heart' src={rating} alt='no' />
          <FaRegHeart />
        </div>
      </div>
    </div>
  );
};
export default All_items