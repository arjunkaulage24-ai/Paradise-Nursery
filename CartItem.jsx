import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Helper to parse "$15" -> 15
  const parsePrice = (costString) => {
    return parseFloat(String(costString).replace(/[^0-9.]/g, '')) || 0;
  };

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart
      .reduce((total, item) => total + parsePrice(item.cost) * item.quantity, 0)
      .toFixed(2);
  };

  // Calculate total cost based on quantity for an individual item
  const calculateTotalCost = (item) => {
    return (parsePrice(item.cost) * item.quantity).toFixed(2);
  };

  const handleContinueShopping = (e) => {
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference — Coming Soon!');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div style={{ maxWidth: '900px', margin: '30px auto', padding: '0 20px', textAlign: 'center' }}>
      <h2 style={{ color: '#0f172a', marginBottom: '24px' }}>
        Total Cart Amount: ${calculateTotalAmount()}
      </h2>

      {cart.length === 0 ? (
        <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '24px' }}>
          Your shopping cart is currently empty.
        </p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.name}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '20px',
                backgroundColor: '#fff',
                padding: '20px',
                marginBottom: '16px',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                textAlign: 'left',
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '140px', height: '140px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <div style={{ flex: 1, minWidth: '220px' }}>
                <h3 style={{ marginBottom: '6px', color: '#0f172a' }}>{item.name}</h3>
                <p style={{ marginBottom: '10px', color: '#475569', fontWeight: '500' }}>
                  Unit Price: {item.cost}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <button
                    onClick={() => handleDecrement(item)}
                    style={{
                      width: '32px',
                      height: '32px',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      backgroundColor: '#e2e8f0',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    -
                  </button>
                  <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item)}
                    style={{
                      width: '32px',
                      height: '32px',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      backgroundColor: '#e2e8f0',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    +
                  </button>
                </div>

                <p style={{ fontWeight: 'bold', fontSize: '1.05rem', marginBottom: '12px', color: '#0f172a' }}>
                  Total: ${calculateTotalCost(item)}
                </p>

                <button
                  onClick={() => handleRemove(item)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#ef4444',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', marginTop: '28px' }}>
        <button
          onClick={handleContinueShopping}
          style={{
            width: '260px',
            padding: '12px 24px',
            fontSize: '1.05rem',
            fontWeight: '600',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Continue Shopping
        </button>
        <button
          onClick={handleCheckoutShopping}
          style={{
            width: '260px',
            padding: '12px 24px',
            fontSize: '1.05rem',
            fontWeight: '600',
            backgroundColor: '#2563eb',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
