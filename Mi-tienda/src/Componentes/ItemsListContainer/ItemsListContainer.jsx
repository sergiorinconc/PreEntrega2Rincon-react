import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import '../../styles/App.css';

const ItemsListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    
    const mockItems = [
      { id: 1, name: 'Producto 1', description: 'Descripción 1', category: 'ropa', image: '/images/producto1.jpg' },
      { id: 2, name: 'Producto 2', description: 'Descripción 2', category: 'electronica', image: '/images/producto2.jpg' },
      { id: 3, name: 'Producto 3', description: 'Descripción 3', category: 'hogar', image: '/images/producto3.jpg' }
    ];
    
    if (categoryId) {
      setItems(mockItems.filter(item => item.category === categoryId));
    } else {
      setItems(mockItems);
    }
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemsListContainer;


