import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/editproductmodal.css";

const EditProductModal = ({ isOpen, onClose, product, onSave}) => {
  const [editedProduct, setEditedProduct] = useState(product || {});
  const token = localStorage.getItem('token')
  console.log(token)

  useEffect(() => {
    if (product) {
      setEditedProduct(product); // Обновляем состояние при изменении пропса product
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Отправляем обновления на сервер
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
        onSave(editedProduct); // Передаем обновленный продукт в родительский компонент
        onClose(); // Закрываем модальное окно после сохранения
      })
      .catch((err) => {
        console.error("Ошибка при сохранении продукта:", err);
      });
  };

  if (!isOpen) return null; // Если модальное окно не открыто, ничего не рендерим

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Редактировать продукт</h2>
          <button className="close-button" onClick={onClose}>
            ✖
          </button>
        </div>
        <form onSubmit={handleSubmit} className="edit-product-form">
          <div className="form-group">
            <label htmlFor="name">Название</label>
            <input
              type="text"
              id="name"
              name="name"
              value={editedProduct.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Цена</label>
            <input
              type="number"
              id="price"
              name="price"
              value={editedProduct.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Количество</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={editedProduct.quantity}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image_url">Изображение URL</label>
            <input
              type="text"
              id="image_url"
              name="image_url"
              value={editedProduct.image_url}
              onChange={handleChange}
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="cancel-button" onClick={onClose}>
              Отменить
            </button>
            <button type="submit" className="save-button">
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;