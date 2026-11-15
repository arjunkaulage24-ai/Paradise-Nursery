import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total quantity across all cart items for the navbar badge
  const totalCartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Check if a plant is already in the cart to disable its button
  const isAddedToCart = (plantName) => {
    return cartItems.some((item) => item.name === plantName);
  };

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
          description: 'Produces oxygen at night, improving air quality.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
          description: 'Filters formaldehyde and xylene from the air.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
          description: 'Removes mold spores and purifies indoor air.',
          cost: '$18',
        },
        {
          name: 'Boston Fern',
          image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
          description: 'Adds humidity to the air and removes toxins.',
          cost: '$20',
        },
        {
          name: 'Rubber Plant',
          image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
          description: 'Easy to care for and effective at removing bioeffluents.',
          cost: '$17',
        },
        {
          name: 'Aloe Vera',
          image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
          description: 'Purifies the air and has soothing medicinal gel.',
          cost: '$14',
        },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        {
          name: 'Lavender',
          image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop',
          description: 'Calming scent, used in aromatherapy and relaxation.',
          cost: '$20',
        },
        {
          name: 'Jasmine',
          image: 'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop',
          description: 'Sweet fragrance, promotes relaxation and better sleep.',
          cost: '$18',
        },
        {
          name: 'Rosemary',
          image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
          description: 'Invigorating scent, often used in culinary dishes.',
          cost: '$15',
        },
        {
          name: 'Mint',
          image: 'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg',
          description: 'Refreshing aroma, great for teas and cooking.',
          cost: '$12',
        },
        {
          name: 'Lemon Balm',
          image: 'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg',
          description: 'Citrusy scent, relieves stress and promotes calm.',
          cost: '$14',
        },
        {
          name: 'Hyacinth',
          image: 'https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg',
          description: 'Beautiful flowering plant known for its rich fragrance.',
          cost: '$22',
        },
      ],
    },
    {
      category: 'Low Maintenance Plants',
      plants: [
        {
          name: 'ZZ Plant',
          image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=1064&auto=format&fit=crop',
          description: 'Thrives in low light and requires minimal watering.',
          cost: '$25',
        },
        {
          name: 'Pothos',
          image: 'https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg',
          description: 'Tolerates neglect and grows well in various lighting.',
          cost: '$10',
        },
        {
          name: 'Cast Iron Plant',
          image: 'https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg',
          description: 'Hardy plant that tolerates low light and irregular watering.',
          cost: '$20',
        },
        {
          name: 'Succulents Mix',
          image: 'https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg',
          description: 'Drought-tolerant plants with unique shapes and colors.',
          cost: '$18',
        },
        {
          name: 'Aglaonema',
          image: 'https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg',
          description: 'Requires minimal care and adds vibrant foliage indoors.',
          cost: '$22',
        },
        {
          name: 'Jade Plant',
          image: 'https://cdn.pixabay.com/photo/2017/06/27/11/48/jade-plant-2447163_1280.jpg',
          description: 'Resilient succulent that stores water in thick glossy leaves.',
          cost: '$16',
        },
      ],
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const handleHomeNavigation = (e) => {
    e.preventDefault();
    setShowCart(false);
    if (onHomeClick) onHomeClick();
  };

  const handlePlantsNavigation = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleCartNavigation = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  // Inline styles for clean layout and persistent Navbar
  const navbarStyle = {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
  };

  const navLinksStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '28px',
  };

  const linkStyle = {
    color: 'white',
    fontSize: '1.2rem',
    textDecoration: 'none',
    fontWeight: '600',
    cursor: 'pointer',
  };

  return (
    <div>
      {/* Persistent Navigation Bar on Both Plants and Cart Pages */}
      <nav style={navbarStyle}>
        <div
          onClick={handleHomeNavigation}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
        >
          <img
            src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
            alt="Paradise Nursery Logo"
            style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#fff' }}
          />
          <div>
            <h3 style={{ margin: 0, fontSize: '1.4rem' }}>Paradise Nursery</h3>
            <i style={{ fontSize: '0.9rem' }}>Where Green Meets Serenity</i>
          </div>
        </div>

        <div style={navLinksStyle}>
          <a href="#home" onClick={handleHomeNavigation} style={linkStyle}>
            Home
          </a>
          <a href="#plants" onClick={handlePlantsNavigation} style={linkStyle}>
            Plants
          </a>
          <a
            href="#cart"
            onClick={handleCartNavigation}
            style={{ ...linkStyle, position: 'relative', display: 'flex', alignItems: 'center' }}
            aria-label="Shopping Cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              height="40"
              width="40"
            >
              <rect width="256" height="256" fill="none" />
              <circle cx="80" cy="216" r="12" fill="#fff" />
              <circle cx="184" cy="216" r="12" fill="#fff" />
              <path
                d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                fill="none"
                stroke="#faf9f9"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="12"
              />
            </svg>
            <span
              style={{
                position: 'absolute',
                top: '8px',
                left: '16px',
                fontSize: '0.95rem',
                fontWeight: 'bold',
                color: '#fff',
              }}
            >
              {totalCartQuantity}
            </span>
          </a>
        </div>
      </nav>

      {/* Conditional View: Product Grid vs Shopping Cart */}
      {!showCart ? (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 20px' }}>
          {plantsArray.map((section, idx) => (
            <div key={idx} style={{ marginBottom: '48px' }}>
              <h1
                style={{
                  textAlign: 'center',
                  borderBottom: '2px solid #4CAF50',
                  paddingBottom: '10px',
                  marginBottom: '28px',
                  color: '#1e293b',
                }}
              >
                {section.category}
              </h1>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '24px',
                }}
              >
                {section.plants.map((plant, plantIdx) => {
                  const added = isAddedToCart(plant.name);
                  return (
                    <div
                      key={plantIdx}
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: '10px',
                        padding: '18px',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                      }}
                    >
                      <h3 style={{ marginBottom: '12px', color: '#0f172a' }}>{plant.name}</h3>
                      <img
                        src={plant.image}
                        alt={plant.name}
                        style={{
                          width: '100%',
                          height: '200px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                          marginBottom: '12px',
                        }}
                      />
                      <p style={{ color: '#e11d48', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '8px' }}>
                        {plant.cost}
                      </p>
                      <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '16px', flexGrow: 1 }}>
                        {plant.description}
                      </p>
                      <button
                        disabled={added}
                        onClick={() => handleAddToCart(plant)}
                        style={{
                          width: '100%',
                          padding: '10px 16px',
                          fontSize: '1rem',
                          fontWeight: '600',
                          color: '#fff',
                          backgroundColor: added ? '#94a3b8' : '#4CAF50',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: added ? 'not-allowed' : 'pointer',
                        }}
                      >
                        {added ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
