
// components/ViewItems.jsx
import React from 'react';
import './Cards.css';

const ViewItems = ({ items, onView }) => (
  <div className="view-container">
    <h2 className="section-title">View All Items</h2>
    <div className="cards-grid">
      {items.map(item => (
        <div key={item.id} className="item-card" onClick={() => onView(item)}>
          <img src={item.coverImage} alt={item.name} />
          <h3>{item.name}</h3>
          <h4>{item.description}</h4>
        </div>
      ))}
    </div>
  </div>
);

export default ViewItems;
