import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import Contacts from "./Contacts";
import HomeMain from "./HomeMain";
import AboutCompany from "./AboutCompany";
import ProductCard from "./Products";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/"element={
            <>
              <Home />
              <HomeMain />
            </>
          }
        />
        <Route path="/сontacts" element={<Contacts />} />
        <Route path="/сompany" element={<AboutCompany />} />
        <Route path="/stocks" element={<ProductCard/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
