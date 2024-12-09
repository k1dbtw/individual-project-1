import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import Contacts from "./Contacts";
import HomeMain from "./HomeMain";
import AboutCompany from "./AboutCompany";
import ProductCard from "./Products";
import Modal from "../components/Modal";

const App = () => {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuth(true);
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
  };

  return (
    <Router>
      <Header
        isAuth={isAuth}
        onLogin={() => setIsModalOpen(true)}
        onLogout={handleLogout}
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
        <Route path="/stocks" element={<ProductCard />} />
      </Routes>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);