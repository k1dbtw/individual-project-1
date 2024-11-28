import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import Contacts from "./Contacts";
import HomeMain from "./HomeMain";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
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
        <Route path="/сontacts" element={<Contacts/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
