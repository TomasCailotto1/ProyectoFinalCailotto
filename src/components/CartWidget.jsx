import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      🛒 <span>{totalItems}</span>
    </div>
  );
};

export default CartWidget;
