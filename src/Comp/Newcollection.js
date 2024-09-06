import React from 'react';
import New_collection from '../Comp/image/data';
import Item from './Item';
import './Newcollection.css'; // Create a CSS file for styling

const Newcollection = () => {
  return (
    <div>
        <h3>New_collection</h3>
    <div className="collection-container">
      {New_collection.map((item, i) => (
        <Item 
          key={i} 
          image={item.image} 
          name={item.name} 
          new_price={item.new_price} 
          old_price={item.old_price} 
        />
      ))}
    </div>
    </div>
  );
}

export default Newcollection;
