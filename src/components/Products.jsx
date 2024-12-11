import React, { useEffect, useState } from "react";
import "../assets/css/ProductCard.css";
import axios from "axios";
import EditProductModal from "../components/EditProductModal"

const Products = ({ searchQuery, addToCart, token }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const role = localStorage.getItem('role')
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
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (product) => {
    setProductToEdit(product);
    setIsEditing(true);
  };

  const handleSave = (editedProduct) => {
    axios
      .put(
        `http://localhost:5000/api/products/${editedProduct.id}`,
        editedProduct,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === editedProduct.id ? editedProduct : product
          )
        );
        setIsEditing(false);
      })
      .catch((err) => {
        console.error("Error saving product:", err);
      });
  };

  const handleDelete = (productId) => {
    axios
      .delete(`http://localhost:5000/api/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      })
      .catch((err) => {
        console.error("Error deleting product:", err);
      });
  };

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
          {role === "admin" && ( 
            <div>
              <button onClick={() => handleEdit(product)}>Редактировать</button>
              <button onClick={() => handleDelete(product.id)}>Удалить</button>
            </div>
          )}
        </div>
      ))}
      {isEditing && (
        <EditProductModal
          isOpen={isEditing}
          onClose={() => setIsEditing(false)}
          product={productToEdit}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default Products;