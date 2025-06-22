// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import AddItem from './components/AddItem';
import ViewItems from './components/ViewItems';
import ItemModal from './components/ItemModal';
import './App.css';

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Nike Running Shoes',
      type: 'Shoes',
      description: 'High-quality running shoes.',
      coverImage: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8f08b820-f450-4a87-b689-c7091cc88a9f/NIKE+FULL+FORCE+LO.png',
      images: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8f08b820-f450-4a87-b689-c7091cc88a9f/NIKE+FULL+FORCE+LO.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8f08b820-f450-4a87-b689-c7091cc88a9f/NIKE+FULL+FORCE+LO.png', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8f08b820-f450-4a87-b689-c7091cc88a9f/NIKE+FULL+FORCE+LO.png']
    }
  ]);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <Router>
      <div className="app-wrapper">
        <nav className="navbar">
          <Link to="/view" className="nav-link">View Items</Link>
          <Link to="/add" className="nav-link">Add Item</Link>
        </nav>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/view" />} />
            <Route path="/add" element={<AddItem onAdd={item => setItems([...items, item])} />} />
            <Route path="/view" element={<ViewItems items={items} onView={setSelectedItem} />} />
          </Routes>
        </div>

        {selectedItem && (
          <div className="modal-backdrop">
            <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;