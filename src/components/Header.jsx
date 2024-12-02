import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/header.css";
import logo from "../assets/imgs/logo.png";
import basket from "../assets/imgs/basket.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__top">
          <div className="header__top-left">
            <i className="bi bi-geo-alt-fill"></i>
            <span>Ташкент, Мирабадский р-он, ул. Авлиё Ота, 7</span>
          </div>
          <div className="header__top-right">
            <i className="bi bi-heart"></i>
            <span>Избранное</span>
            <i className="bi bi-card-list"></i>
            <span>Сравнение (0)</span>
            <i className="bi bi-person-lock"></i>
            <span>Войти</span>
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
                />
                <label htmlFor="search" className="header__main-label">
                  Начните вводить название товара
                </label>
              </div>
            </form>
          </div>
          <div className="header__main-container">
            <h1 className="header__main-number">+998 (78) 147-01-01</h1>
            <a href="" className="header__main-link">
              Заказать звонок
            </a>
          </div>
        </div>
        <div className="header__main-basket">
          <img src={basket} alt="" />
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
      <hr />
    </>
  );
}

export default Header;