import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../features/cartSlice';
import Navbar from './Navbar';
import './ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedItems, setAddedItems] = useState({});

  const categories = [
    {
      name: 'Indoor Plants',
      products: [
        { id: 1, name: 'Snake Plant', price: 25, thumbnail: 'https://images.unsplash.com/photo-1593691509543-55a32e3e8c41?w=200&h=200&fit=crop', category: 'Indoor' },
        { id: 2, name: 'Peace Lily', price: 30, thumbnail: 'https://images.unsplash.com/photo-1593691509543-55a32e3e8c41?w=200&h=200&fit=crop', category: 'Indoor' },
        { id: 3, name: 'Fiddle Leaf Fig', price: 45, thumbnail: 'https://images.unsplash.com/photo-1593691509543-55a32e3e8c41?w=200&h=200&fit=crop', category: 'Indoor' },
        { id: 4, name: 'Monstera', price: 35, thumbnail: 'https://images.unsplash.com/photo-1593691509543-55a32e3e8c41?w=200&h=200&fit=crop', category: 'Indoor' },
        { id: 5, name: 'Spider Plant', price: 20, thumbnail: 'https://images.unsplash.com/photo-1593691509543-55a32e3e8c41?w=200&h=200&fit=crop', category: 'Indoor' },
        { id: 6, name: 'Pothos', price: 22, thumbnail: 'https://images.unsplash.com/photo-1593691509543-55a32e3e8c41?w=200&h=200&fit=crop', category: 'Indoor' }
      ]
    },
    {
      name: 'Outdoor Plants',
      products: [
        { id: 7, name: 'Rose Bush', price: 40, thumbnail: 'https://images.unsplash.com/photo-1593691509543-55a32e3e8c41?w=200&h=200&fit=crop', category: 'Outdoor' },
        { id: 8, name: 'Lavender', price: 28, thumbnail: 'https://images.unsplash.com/photo-1593691509543-55a32e3e8c41?w=200&h=200&fit=crop', category: 'Outdoor' },
        { id: 9, name: 'Hydrangea', price: 35, thumbnail: 'https://images.unsplash.com/photo-1593691509543-55a32e3e8c41?w=200&h=200&fit=crop', category: 'Outdoor' },
        { id: 10, name: 'Boxwood', price: 32, thumbnail: 'https://images.unsplash.com/photo-1593691509543-55a32e3e8c41?w=200&h=200&fit=crop', category: 'Outdoor' },
        { id: 11, name: 'Fern', price: 25, thumbnail: 'https://images.unsplash.com/photo-1593691509543-55a32e3e8c41?w=200&h=200&fit=crop', category: 'Outdoor' },
        { id: 12, name: 'Ornamental Grass', price: 30, thumbnail: 'https://images.unsplash.com/photo-1593691509543-55a32e3e8c41?w=200&h=200&fit=crop', category: 'Outdoor' }
      ]
    },
    {
      name: 'Succulents',
      products: [
        { id: 13, name: 'Echeveria', price: 15, thumbnail: 'https://images.unsplash.com/photo-1593691509543-55a32e3e8c41?w=200&h=200&fit=crop', category: 'Succulent' },
        { id: 14, name: 'Aloe Vera', price: 18, thumbnail: 'https://images.unsplash.com/photo-1593691509543-55a32e3e8c41?w=200&h=200&fit=crop', category: 'Succulent' },
        { id: 15, name: 'Jade Plant', price: 20, thumbnail: 'https://images.unsplash.com/photo-1593691509543-55a32e3e8c41?w=200&h=200&fit=crop', category: 'Succulent' },
        { id: 16, name: 'Haworthia', price: 16, thumbnail: 'https://images.unsplash.com/photo-1593691509543-55a32e3e8c41?w=200&h=200&fit=crop', category: 'Succulent' },
        { id: 17, name: 'String of Pearls', price: 22, thumbnail: 'https://images.unsplash.com/photo-1593691509543-55a32e3e8c41?w=200&h=200&fit=crop', category: 'Succulent' },
        { id: 18, name: 'Sedum', price: 14, thumbnail: 'https://images.unsplash.com/photo-1593691509543-55a32e3e8c41?w=200&h=200&fit=crop', category: 'Succulent' }
      ]
    }
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setAddedItems(prev => ({ ...prev, [product.id]: true }));
  };

  const isItemInCart = (productId) => {
    return cartItems.some(item => item.id === productId) || addedItems[productId];
  };

  return (
    <div className="product-list-container">
      <Navbar />
      
      <div className="products-content">
        {categories.map((category, index) => (
          <div key={index} className="category-section">
            <h2 className="category-title">{category.name}</h2>
            <div className="products-grid">
              {category.products.map(product => (
                <div key={product.id} className="product-card">
                  <img 
                    src={product.thumbnail} 
                    alt={product.name}
                    className="product-thumbnail"
                  />
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">${product.price}</p>
                  <button 
                    className={`add-to-cart-btn ${isItemInCart(product.id) ? 'disabled' : ''}`}
                    onClick={() => handleAddToCart(product)}
                    disabled={isItemInCart(product.id)}
                  >
                    {isItemInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;