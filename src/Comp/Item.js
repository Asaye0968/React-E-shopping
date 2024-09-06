import React from 'react'
import './Item.css'
const Item = (props) => {
  return (
    <div>
       
        <div className='product'>
            <div className='image'>
        <img src={props.image} alt={props.name} /> {/* Rendering image */}
        </div>
        <h3>{props.name}</h3> {/* Item name */}
        <div className='price'>
        <p>New Price: ${props.new_price}</p> {/* New price */}
        {props.old_price && <p>Old Price: <s>${props.old_price}</s></p>} {/* Optional old price */}
        </div>
        {/* <div className='btn'>
            <button>Addtocart</button>
        </div> */}
        </div>
    </div>
  )
}

export default Item
