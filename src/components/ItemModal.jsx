// components/ItemModal.jsx
import React, { useState } from 'react';
import './Modals.css';

const ItemModal = ({ item, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < item.images.length ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : item.images.length - 1
    );
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <div className="modal-box enhanced">
          <button className="modal-close-button" onClick={onClose}>
            &times;
          </button>

          <h2 className="modal-title">{item.name}</h2>
          <p className="modal-type">
            <strong>Type:</strong> {item.type}
          </p>
          <p className="modal-description">{item.description}</p>

          {item.images?.length > 0 ? (
            <div className="carousel-slider-wrapper">
              <button onClick={handlePrev} className="slider-nav slider-left">
                &#8592;
              </button>

              <div className="carousel-track">
                {item.images.map((img, index) => (
                  <div
                    key={index}
                    className={`carousel-slide ${
                      index === currentIndex ? 'active' : 'inactive'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`slide-${index}`}
                      className="carousel-slide-img"
                    />
                  </div>
                ))}
              </div>

              <button onClick={handleNext} className="slider-nav slider-right">
                &#8594;
              </button>

              <div className="carousel-counter">
                {currentIndex + 1} / {item.images.length}
              </div>
            </div>
          ) : (
            <p>No images available.</p>
          )}

          <button
            className="modal-button"
            onClick={() => alert('Enquiry sent!')}
          >
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
