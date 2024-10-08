'use client'

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const ItemContext = createContext();


export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/items');

      if (!response.ok) {
        throw new Error('Get items response is not OK.');
      }

      const items = await response.json();
      setItems(items);
    } catch (error) {
      console.error('Error when trying to get items: ', error);
    } finally {
      setLoading(false);
    }
  };

  const addItem = async (item) => {
    try {
      const response = await fetch('http://localhost:3000/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: item }),
      });

      if (!response.ok) {
        throw new Error('Add item response is not OK.');
      }

      const newItem = await response.json();
      setItems((prevItems) => [...prevItems, newItem]);
    } catch (error) {
      console.error('Error when trying to add item: ', error);
    }
  };

  useEffect(
    () => {
      fetchItems();
    },
    []
  );

  return (
    <ItemContext.Provider
      value={{ items, addItem, loading }}
    >
      {children}
    </ItemContext.Provider>
  );
}


export const useItems = () => {
  const context = useContext(ItemContext);

  return context;
}
