import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductList.css';

const ProductList = ({ products, onAddToCart, onViewDetails }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleViewDetails = (product) => {
    onViewDetails(product);
    navigate('/details');
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredProducts.length === 0 && <p>No products found.</p>}

      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h4>{product.title.slice(0, 30)}...</h4>
            <p><strong>${product.price.toFixed(2)}</strong></p>
            <button onClick={() => handleViewDetails(product)}><b>Details</b></button>
            <button onClick={() => onAddToCart(product)}><b>Add to Cart</b></button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
