import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/css/header.css";
import logo from "../assets/imgs/logo.png";
import { Routes, Route, Link } from "react-router-dom";

const Main = () => <h1></h1>;
const About = () => <h1></h1>;
const Delivery = () => <h1></h1>;
const Payment = () => <h1></h1>;
const Reg = () => <h1></h1>;
const Map = () => <h1></h1>;

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
          <div className="header__main-div">Товары для офиса
          и детского творчества</div>
          <div className="header__main-form">
            <form action="" className="form">
              <input type="text" name="" id="" className="header__main-input" placeholder="Начните вводить название товара"/>
            </form>
          </div>
          <h1 className="header__main-number">+998 (78) 147-01-01</h1>
          <a href="" className="header__main-link">Заказать звонок</a>
        </div>
        <hr />
        <nav className="header__nav">
          <Link to="/">Главная</Link>
          <Link to="https://franshiza.kanstik.uz/">Франшиза</Link>
          <Link to="/сontacts">Контакты</Link>
          <Link to="/сompany">Компания</Link>
          <Link to="/stocks">Акции</Link>
          <Link to="/delivery">Оплата и доставка</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </>
  );
}

export default Header;
