import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, onRemove }) => {
  return (
    <section>
       <h1>Cart</h1>
      {cartItems.length === 0 ? (
       
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <span>{item.title.slice(0, 40)} - ${item.price.toFixed(2)}</span>
              <button onClick={() => onRemove(item.id)}><b>Remove</b></button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Cart;