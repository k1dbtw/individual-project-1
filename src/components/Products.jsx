import React, { useEffect, useState } from "react";
import "../assets/css/ProductCard.css";
import axios from "axios";

const ProductCard = ({ image, title, price, quantity }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>
        <strong>Цена:</strong> {price} UZS
      </p>
      <p>
        <strong>Количество:</strong> {quantity}
      </p>
      <button>Купить</button>
    </div>
  );
};

const ProductList = () => {
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

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="cards-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image_url}
          title={product.name}
          price={product.price}
          quantity={product.quantity}
        />
      ))}
    </div>
  );
};

export default ProductList;