import React, { useEffect, useState } from "react";
import "../assets/css/ProductCard.css"; 
import axios from "axios";

const Products = ({ searchQuery, addToCart }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products") 
      .then((response) => {
        setProducts(response.data); 
      })
      .catch((err) => {
        setError("Не удалось загрузить продукты.");
        console.error(err);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) // Фильтрация по запросу
  );

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="cards-container">
      {filteredProducts.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image_url} alt={product.name} />
          <h3>{product.name}</h3>
          <p>
            <strong>Цена:</strong> {product.price} UZS
          </p>
          <p>
            <strong>Количество:</strong> {product.quantity}
          </p>
          <button onClick={() => addToCart(product)}>Купить</button>
        </div>
      ))}
      
    </div>
  );
};


export default Products;