import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div style={{border:"1px solid #ccc", padding:"1rem"}}>
      <h4>{item.name}</h4>
      <p>Precio: ${item.price}</p>
      <Link to={`/item/${item.id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;
    