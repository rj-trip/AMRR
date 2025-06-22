
// components/ViewItems.jsx
import React from 'react';
import './Cards.css';

const ViewItems = ({ items, onView }) => (
  <div className="view-container">
    <h2 className="section-title">View All Items</h2>
    <div className="cards-grid">
      {items.map(item => (
        <div key={item.id} className="item-card enhanced-card" onClick={() => onView(item)}>
          <img src={item.coverImage} alt={item.name} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{item.name}</h3>
            <p className="card-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ViewItems;
