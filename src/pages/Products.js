import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { fetchProducts } from '../features/productsSlice';

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const status = useSelector(state => state.products.status);
  const error = useSelector(state => state.products.error);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchProducts());
  }, [status, dispatch]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Products</h2>
      {status === 'loading' && <p>Loading products...</p>}
      {status === 'failed' && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ display: 'flex', flexDirection: 'row',justifyContent: "space-around", gap: 16, flexWrap: 'wrap' }}>
        {products.map(p => (
          <div key={p.id} style={{ border: '1px solid #ccc', padding: 12, width: 220  }}>
            <img src={p.image} alt={p.title} style={{ width: '100%', height: 140, objectFit: 'contain' }} />
            <h3 style={{ fontSize: 16 }}>{p.title}</h3>
            <p>${p.price.toFixed(2)}</p>
            <button onClick={() => dispatch(addToCart({ id: p.id, title: p.title, price: p.price }))}>
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
