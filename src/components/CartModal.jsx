import { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/company.css";

function CartModal(props) {
  const [cartItems, setCartItems] = useState([]);
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  useEffect(() => {
    if (props.isOpen) {
      // Убедимся, что модальное окно открыто
      fetchCartItems();
    }
  }, [props.isOpen]);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/cart_all", {
        params: { email }, // Передаем email как параметр запроса
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      setCartItems(response.data);
      console.log("Запрос успешно выполнен");
    } catch (error) {
      console.error("Ошибка при получении корзины:", error.message);
    }
  };

  return (
    <div className={`modal modalCart ${props.isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2>Ваша корзина</h2>
        {cartItems.length === 0 ? (
          <p>Ваша корзина пуста</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index}>
              <h3>{item.name}</h3>
              <p>Количество: {item.quantity}</p>
              <p>Цена: {item.price} UZS</p>
            </div>
          ))
        )}
        <button onClick={props.onClose}>Закрыть</button>
      </div>
    </div>
  );
}

export default CartModal;
