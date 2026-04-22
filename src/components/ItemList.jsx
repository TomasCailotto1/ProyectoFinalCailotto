import React from 'react';
import Item from './Item.jsx';

const ItemList = ({ items }) => {
  return (
    <div style={{display:"flex", gap:"1rem"}}>
      {items.map(item => <Item key={item.id} item={item} />)}
    </div>
  );
};

export default ItemList;
