import React, { useState } from "react";
import "../assets/css/modal.css";

const Modal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Логика входа
      console.log("Login with", formData);
    } else {
      // Логика регистрации
      console.log("Register with", formData);
    }
  };

  if (!isOpen) return null; // Если окно закрыто, не рендерим его

  return (
    <div className={`modal ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{isLogin ? "Вход" : "Регистрация"}</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">Имя</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="email">Электронная почта</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Пароль</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn">
              {isLogin ? "Войти" : "Зарегистрироваться"}
            </button>
            <div className="switch">
              <span>{isLogin ? "Нет аккаунта?" : "Уже есть аккаунт?"}</span>
              <button type="button" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Зарегистрироваться" : "Войти"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
