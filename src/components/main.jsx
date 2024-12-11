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
    setIsAuth(false);
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
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