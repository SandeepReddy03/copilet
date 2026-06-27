import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../features/cartSlice';

export default function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, it) => sum + it.price * it.quantity, 0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {items.map(it => (
              <li key={it.id} style={{ marginBottom: 8 }}>
                {it.title} — ${it.price.toFixed(2)} × {it.quantity}
                <button onClick={() => dispatch(removeFromCart(it.id))} style={{ marginLeft: 8 }}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> ${total.toFixed(2)}</p>
          <button onClick={() => dispatch(clearCart())}>Clear cart</button>
        </div>
      )}
    </div>
  );
}
