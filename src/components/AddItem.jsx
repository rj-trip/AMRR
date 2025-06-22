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
    setTimeout(() => setSuccess(false), 3000); // auto-hide message after 3s
  };

  return (
    <div className="form-container-enhanced">
      <h2 className="form-title">Add New Item</h2>
      {success && <p className="success-message">✅ Item successfully added!</p>}

      <form onSubmit={handleSubmit} className="item-form">
        <label>Item Name</label>
        <input
          type="text"
          placeholder="Nike Air Max"
          required
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <label>Item Type</label>
        <input
          type="text"
          placeholder="Shoes / Shirt / Sports Gear"
          required
          value={form.type}
          onChange={e => setForm({ ...form, type: e.target.value })}
        />

        <label>Description</label>
        <textarea
          placeholder="High-quality, comfortable running shoes."
          required
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        ></textarea>

        <label>Cover Image URL</label>
        <input
          type="text"
          placeholder="https://example.com/cover.jpg"
          required
          value={form.coverImage}
          onChange={e => setForm({ ...form, coverImage: e.target.value })}
        />

        <label>Additional Images (comma-separated URLs)</label>
        <input
          type="text"
          placeholder="https://img1.jpg, https://img2.jpg"
          required
          value={form.images}
          onChange={e => setForm({ ...form, images: e.target.value })}
        />

        <button type="submit" className="add-button">➕ Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;