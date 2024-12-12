import React, { useState } from "react";
import Modal from "./Modal";
import CartModal from "../components/CartModal"; // предполагается, что вы создали этот компонент
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/header.css";
import logo from "../assets/imgs/logo.png";
import basket from "../assets/imgs/basket.svg";
import { Link } from "react-router-dom";

function Header({ isAuth, onLogin, onLogout, onSearchChange, cart }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false); // Новое состояние для модального окна корзины
  const [searchQuery, setSearchQuery] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleCartModel = (state) => setIsCartModalOpen(!state);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <>
      <header className="header">
        <div className="header__top">
          <div className="header__top-left">
            <i className="bi bi-geo-alt-fill"></i>
            <span>Ташкент, Мирабадский р-он, ул. Авлиё Ота, 7</span>
          </div>
          <div className="header__top-right">
            <i className="bi bi-person-lock" onClick={openModal}></i>
            <button
              className="header__btn"
              onClick={isAuth ? onLogout : onLogin}
            >
              {isAuth ? "Выйти" : "Войти"}
            </button>
          </div>
        </div>
        <hr />
        <div className="header__main">
          <img src={logo} alt="header__logo" className="header__main-img" />
          <div className="header__main-div">
            Товары для офиса и детского творчества
          </div>
          <div className="header__main-form">
            <form action="" className="form">
              <div className="form-floating">
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="header__main-input"
                  placeholder=" "
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <label htmlFor="search" className="header__main-label">
                  Начните вводить название товара
                </label>
              </div>
            </form>
          </div>
          <div className="header__main-contact">
            <div className="header__main-info">
              <h1 className="header__main-number">+998 (78) 147-01-01</h1>
              <a href="#" className="header__main-link">
                Заказать звонок
              </a>
            </div>
            <div
              className="header__main-basket"
              onClick={() => {
                toggleCartModel(isCartModalOpen);
              }}
            >
              <img src={basket} alt="Корзина" />
              <span className="cart-count">{cart.length}</span>
            </div>
          </div>
        </div>
        <hr />
        <nav className="header__nav">
          <Link to="/">Главная</Link>
          <Link to="https://franshiza.kanstik.uz/">Франшиза</Link>
          <Link to="/сontacts">Контакты</Link>
          <Link to="/сompany">Компания</Link>
          <Link to="/stocks">Товары</Link>
          <Link to="/delivery">Оплата и доставка</Link>
        </nav>
      </header>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <CartModal isOpen={isCartModalOpen} onClose={toggleCartModel} />
    </>
  );
}

export default Header;
