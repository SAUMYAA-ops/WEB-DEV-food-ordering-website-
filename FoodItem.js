import React from 'react';
import './FoodItem.css';

const FoodItem = ({ item, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div className="food-item">
      <div className="food-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="food-item-content">
        <h3 className="food-item-name">{item.name}</h3>
        <p className="food-item-description">{item.description}</p>
        <div className="food-item-footer">
          <span className="food-item-price">₹{item.price}</span>
          <button
            className="btn btn-primary add-to-cart-btn"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem; 