import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products.js';
import ItemDetail from './ItemDetail.jsx';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(p => p.id === parseInt(id)));
      }, 500);
    });

    getProduct.then(res => setProduct(res));
  }, [id]);

  return (
    <div style={{padding:"2rem"}}>
      {product ? <ItemDetail product={product} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;
