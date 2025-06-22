
// components/AddItem.jsx
import React, { useState } from 'react';
import './Form.css';

const AddItem = ({ onAdd }) => {
  const [form, setForm] = useState({ name: '', type: '', description: '', coverImage: '', images: '' });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      ...form,
      id: Date.now(),
      images: form.images
        .split(',')
        .map(url => url.trim())
        .filter(url => url !== '')
    };
    onAdd(newItem);
    setSuccess(true);
    setForm({ name: '', type: '', description: '', coverImage: '', images: '' });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add New Item</h2>
      {success && <p className="success-message">Item successfully added!</p>}
      <form onSubmit={handleSubmit} className="item-form">
        <input type="text" placeholder="Item Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input type="text" placeholder="Item Type" required value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} />
        <textarea placeholder="Item Description" required value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}></textarea>
        <input type="text" placeholder="Cover Image URL" required value={form.coverImage} onChange={e => setForm({ ...form, coverImage: e.target.value })} />
        <input type="text" placeholder="Additional Image URLs (comma-separated)" required value={form.images} onChange={e => setForm({ ...form, images: e.target.value })} />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;
