import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import Contacts from "./Contacts";
import HomeMain from "./HomeMain";
import AboutCompany from "./AboutCompany";
import Products from "./Products";
import Modal from "../components/Modal";
import Payment from "./Payment";
import Footer from "../components/Footer"; // Import Footer component
import CartModal from "./CartModal";
import axios from "axios";

const App = () => {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);

  const handleLoginSuccess = () => {
    setIsAuth(true);
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsAuth(false);
  };

  const addToCart = (product) => {
    const email = localStorage.getItem('email');
    axios.post("http://localhost:5000/api/cart", {
      product_id: product.id,
      email: email
    }).then(response => {
      console.log("Товар добавлен в корзину:", response.data);
      // Обновляем локальное состояние корзины
      setCart((prevCart) => {
        const existingProduct = prevCart.find(item => item.id === product.id);
        if (existingProduct) {
          // Если товар уже в корзине, увеличиваем количество
          return prevCart.map(item => 
            item.id === product.id ? {...item, quantity: item.quantity + 1} : item
          );
        } else {
          // Если товара нет в корзине, добавляем его
          return [...prevCart, {...product, quantity: 1}];
        }
      });
    }).catch(error => {
      console.error("Ошибка при добавлении в корзину:", error);
    });
  };

  return (
    <Router>
      <Header
        isAuth={isAuth}
        onLogin={() => setIsModalOpen(true)}
        onLogout={handleLogout}
        onSearchChange={setSearchQuery}
        cart={cart} // Передаем корзину в Header
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <HomeMain />
            </>
          }
        />
        <Route path="/сontacts" element={<Contacts />} />
        <Route path="/сompany" element={<AboutCompany />} />
        <Route
          path="/stocks"
          element={<Products searchQuery={searchQuery} addToCart={addToCart} />}
        />
        <Route path="/delivery" element={<Payment />} />
      </Routes>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
      <Footer
        handleSpecialOffersClick={() => {}}
        handleNavigateToDelivery={() => {}}
      />
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
