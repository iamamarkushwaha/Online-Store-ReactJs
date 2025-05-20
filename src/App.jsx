import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(0)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Fetch error:', err))
  }, [])

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId)
    setCartItems(updatedCart);
  }

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
  }

  return (
    <div className="container">
      
      <nav className="navbar">
        <div className="navbar-logo">🛒 CartAttack</div>
        <div className="navbar-right">
          <a href="home">Home</a>
          <a href="orders">Orders</a>
          <a href="address">Address</a>
          <a href="country">Country</a>
        </div>
      </nav>

      <h1>Cart Attack</h1>

      <section>
        <h2>🧾 Products</h2>
        {products.length === 0 && <p>Loading products...</p>}

        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h4>{product.title.slice(0, 30)}...</h4>
              <p><strong>${product.price.toFixed(2)}</strong></p>
              <button onClick={() => handleShowDetails(product)}><b>Details</b></button>
              <button onClick={() => handleAddToCart(product)}><b>Add to Cart</b></button>
            </div>
          ))}
        </div>
      </section>

      <hr />

      <section>
        <h2>🔍 Product Details</h2>
        {selectedProduct ? (
          <div className="product-details">
            <img src={selectedProduct.image} alt={selectedProduct.title} style={{ width: '100%', height: '300px', objectFit: 'contain' }} />
            <h3>{selectedProduct.title}</h3>
            <p><strong>Price:</strong> ${selectedProduct.price.toFixed(2)}</p>
            <p><strong>Category:</strong> {selectedProduct.category}</p>
            <p>{selectedProduct.description}</p>
          </div>
        ) : (
          <p>Select a product to see its details.</p>
        )}
      </section>

      <hr />

      <section>
        <h2>🛒 Cart ({cartItems.length} items)</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                {item.title.slice(0, 40)} - ${item.price.toFixed(2)}
                <button className="remove-button" onClick={() => handleRemoveFromCart(item.id)}>
                  <b>Remove</b>
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

export default App;
