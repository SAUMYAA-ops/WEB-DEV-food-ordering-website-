import React from 'react';
import './CartItem.css';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  const handleQuantityChange = (newQuantity) => {
    updateQuantity(item.id, newQuantity);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">₹{item.price}</p>
      </div>
      <div className="cart-item-quantity">
        <button
          className="quantity-btn"
          onClick={() => handleQuantityChange(item.quantity - 1)}
        >
          -
        </button>
        <span className="quantity-display">{item.quantity}</span>
        <button
          className="quantity-btn"
          onClick={() => handleQuantityChange(item.quantity + 1)}
        >
          +
        </button>
      </div>
      <div className="cart-item-total">
        <span>₹{item.price * item.quantity}</span>
      </div>
      <button
        className="btn btn-danger remove-btn"
        onClick={handleRemove}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem; 