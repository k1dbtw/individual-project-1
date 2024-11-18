import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Main = () => <h1>Главная</h1>;
const About = () => <h1>О компании</h1>;
const Delivery = () => <h1>Условия доставки</h1>;
const Payment = () => <h1>Оплата</h1>;
const Reg = () => <h1>Регистрация</h1>;
const Map = () => <h1>Карта сайта</h1>;
const Search = () => <h1>Поиск по сайту</h1>;

function Header() {
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <Link to="/">Главная</Link> | <Link to="/about">О компании</Link> | <Link to="/delivery">Условия доставки</Link> | <Link to="/payment">Оплата</Link> | <Link to="/reg">Регистрация</Link> | <Link to="/map">Карта сайта</Link> | <Link to="/search">Поиск по сайту</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/map" element={<Map />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default Header;