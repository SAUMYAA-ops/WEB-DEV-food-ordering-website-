import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import './CartPage.css';

const CartPage = ({ cart, removeFromCart, updateQuantity, getTotalPrice }) => {
  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <h1 className="page-title">🛒 Your Cart</h1>
          <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Add some delicious food to get started!</p>
            <Link to="/" className="btn btn-primary">
              Browse Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="page-title">🛒 Your Cart</h1>
        <div className="cart-content">
          <div className="cart-items">
            {cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            ))}
          </div>
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-item">
              <span>Subtotal:</span>
              <span>₹{getTotalPrice()}</span>
            </div>
            <div className="summary-item">
              <span>Tax (18% GST):</span>
              <span>₹{Math.round(getTotalPrice() * 0.18)}</span>
            </div>
            <div className="summary-item total">
              <span>Total:</span>
              <span>₹{Math.round(getTotalPrice() * 1.18)}</span>
            </div>
            <button className="btn btn-success checkout-btn">
              Proceed to Checkout
            </button>
            <Link to="/" className="btn btn-secondary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage; 