import React from 'react';


const Item = ({ item }) => {
  return (
    <li
      className="p-4 bg-white shadow rounded-md"
    >
      {item.name}
    </li>
  );
}

export default Item;
