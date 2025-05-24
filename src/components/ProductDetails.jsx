import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product }) => {
  if (!product) return <p>Select a product to see details.</p>;

  return (
    <section>

      <div className="product-details">
        <img src={product.image} alt={product.title} className="details-image" />
        <h3>{product.title}</h3>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>Category: {product.category}</p>
        <p>{product.description}</p>
      </div>
    </section>
  );
};

export default ProductDetails;
