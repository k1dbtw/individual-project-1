import React from 'react';
import '../assets/css/ProductCard.css'; // Подключаем CSS для стилизации

const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Цена:</strong> {price} руб.</p>
      <button>Купить</button>
    </div>
  );
};

const ProductList = () => {
  const products = [
    {
      image: 'https://source.unsplash.com/300x200/?pen',
      title: 'Шариковая ручка Elegance',
      description: 'Отлично подходит для работы и учебы.',
      price: 120,
    },
    {
      image: 'https://source.unsplash.com/300x200/?stationery',
      title: 'Ручка Premium Classic',
      description: 'Стильный и долговечный аксессуар.',
      price: 250,
    },
    {
      image: 'https://source.unsplash.com/300x200/?colorful-pen',
      title: 'Набор цветных ручек',
      description: 'Добавьте яркости своим записям.',
      price: 350,
    },
  ];

  return (
    <div className="cards-container">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;