import React, { useContext } from 'react';
import ItemCount from './ItemCount.jsx';
import { CartContext } from '../context/CartContext.jsx';

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = (quantity) => {
    addToCart(product, quantity);
  };

  return (
    <div style={{border:"1px solid #ccc", padding:"1rem"}}>
      <h2>{product.name}</h2>
      <p>Categoría: {product.category}</p>
      <p>Precio: ${product.price}</p>
      <ItemCount onAdd={handleAdd} />
    </div>
  );
};

export default ItemDetail;
