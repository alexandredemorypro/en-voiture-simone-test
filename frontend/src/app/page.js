'use client'

import React from 'react';
import ItemList from '../components/ItemList';
import AddItemForm from '../components/AddItemForm';


const ItemListPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center bg-gray-100 py-10"
    >
      <h1
        className="text-3xl font-bold mb-6 text-gray-800"
      >
        Items list
      </h1>
      <ItemList />
      <AddItemForm />
    </div>
  );
}

export default ItemListPage;
