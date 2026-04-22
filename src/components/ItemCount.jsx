import React, { useState } from 'react';

const ItemCount = ({ onAdd }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
      <span style={{margin:"0 1rem"}}>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => onAdd(count)} disabled={count === 0}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
