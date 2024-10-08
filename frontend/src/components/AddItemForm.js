import React, {
  useState,
} from 'react';
import {
  useItems,
} from '../context/ItemContext';


const AddItemForm = () => {
  const [newItem, setNewItem] = useState('');
  const { addItem } = useItems();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newItem.trim() !== '') {
      await addItem(newItem);
      setNewItem('');
    }
  };

  return (
    <form
      className="flex flex-col items-center space-y-4"
      onSubmit={handleSubmit}
    >
      <label>
        Add a new item
      </label>
      <input
        className="w-full max-w-md p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        type="text"
        value={newItem}
        onChange={
          (e) => setNewItem(e.target.value)
        }
        placeholder="Fill in an item name"
      />
      <button
        className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default AddItemForm;
