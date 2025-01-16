import React, { useState } from "react";
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Men's Casual Crocs Sandals", price: 100, image: "/images/crocs.jpg" },
    { id: 2, name: "Comfortable Office Formal Shoes", price: 200, image: "/images/office shoes.jpg" },
    { id: 3, name: "Summer Flip-Flop Sandals", price: 150, image: "/images/sandals.jpg" },
    { id: 4, name: "Stylish Men's Leather Shoes", price: 250, image: "/images/shoes.jpg" },
  ];

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  // Handle the buy action
  const handleBuy = () => {
    alert("Thank you for your purchase!");
    setCart([]);
    setTotal(0);
  };

  return (
    <div className="App">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Cart</h2>
      <div className="cart">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
            <p>Total: ${total}</p>
            <button onClick={handleBuy}>Buy Now</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
