import React from 'react';
import Item from './Item';
import {
  useItems,
} from '../context/ItemContext';


const ItemList = () => {
  const { items, loading } = useItems();

  if (loading) {
    return (
      <div className="text-center text-gray-500">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <ul
      className="w-full max-w-md mx-auto mt-6 mb-6 space-y-2"
    >
      {items.map(
        (item, index) => (
          <Item
            key={index}
            item={item}
          />
        )
      )}
    </ul>
  );
}

export default ItemList;