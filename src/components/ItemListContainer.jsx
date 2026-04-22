import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products.js';
import ItemList from './ItemList.jsx';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryId ? products.filter(p => p.category === categoryId) : products);
      }, 500);
    });

    getProducts.then(res => setItems(res));
  }, [categoryId]);

  return (
    <div style={{padding:"2rem"}}>
      <h3>{categoryId ? `Categoría: ${categoryId}` : "Catálogo completo"}</h3>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
