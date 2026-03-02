import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../features/cartSlice';
import Navbar from './Navbar';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector(state => state.cart);

  const handleCheckout = () => {
    alert('Coming Soon! Our checkout feature is under development.');
  };

  if (items.length === 0) {
    return (
      <div className="cart-container">
        <Navbar />
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any plants to your cart yet.</p>
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <Navbar />
      
      <div className="cart-content">
        <h1 className="cart-title">Shopping Cart</h1>
        
        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <img 
                src={item.thumbnail} 
                alt={item.name}
                className="cart-item-thumbnail"
              />
              
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">Unit Price: ${item.price}</p>
              </div>
              
              <div className="cart-item-quantity">
                <button 
                  className="quantity-btn"
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => dispatch(increaseQuantity(item.id))}
                >
                  +
                </button>
              </div>
              
              <p className="cart-item-total">
                ${item.totalPrice.toFixed(2)}
              </p>
              
              <button 
                className="delete-btn"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
        
        <div className="cart-summary">
          <div className="cart-total">
            <h3>Total Amount:</h3>
            <h3>${totalAmount.toFixed(2)}</h3>
          </div>
          
          <div className="cart-actions">
            <Link to="/products" className="continue-shopping-btn">
              Continue Shopping
            </Link>
            <button 
              className="checkout-btn"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;