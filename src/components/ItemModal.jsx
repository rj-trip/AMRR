
// components/ItemModal.jsx
import React, { useState } from 'react';
import './Modals.css';

const ItemModal = ({ item, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 1 < item.images.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="modal-container">
      <div className="modal-box">
        <h2 className="modal-title">{item.name}</h2>
        <p className="modal-type">Type: {item.type}</p>
        <p className="modal-description">{item.description}</p>

        {item.images && item.images.length > 0 ? (
          <div className="carousel-wrapper">
            <div className="carousel-row">
              <img
                src={item.images[currentIndex]}
                alt={`carousel-${currentIndex}`}
                className="carousel-image"
              />
            </div>
            {item.images.length > 1 && (
              <div className="carousel-controls">
                <button onClick={handlePrev} className="carousel-button">&#8592; Prev</button>
                <button onClick={handleNext} className="carousel-button">Next &#8594;</button>
              </div>
            )}
          </div>
        ) : (
          <p>No images available.</p>
        )}

        <button className="modal-button" onClick={() => alert('Enquiry sent!')}>Enquire</button>
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ItemModal;
