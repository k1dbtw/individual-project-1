import { useState } from "react";
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

  // Обработчик отправки формы для входа
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        // Убедитесь, что путь правильный
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token); // Сохраняем токен в localStorage
        onClose(); // Закрытие модального окна после успешного входа
      } else {
        alert(data.message || "Произошла ошибка");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Не удалось выполнить запрос. Проверьте соединение.");
    }
  };

  // Обработчик отправки формы для регистрации
  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Регистрация прошла успешно");
      setIsLogin(true); // Переключаемся на форму входа
    } else {
      alert(data.message); // Если ошибка, выводим сообщение
    }
  };

  if (!isOpen) return null; // Если окно закрыто, не рендерим его

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{isLogin ? "Вход" : "Регистрация"}</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <form onSubmit={isLogin ? handleLogin : handleRegister}>
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