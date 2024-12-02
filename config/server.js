import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pool from "./db.js";  // Не забудь добавить расширение .js

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Обработчик для корня сайта (главной страницы)
app.get("/", (req, res) => {
  res.send("Welcome to the Stationery Store API!");
});

// Обработчик для маршрута /products
app.get("/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching products:", err.message);
    res.status(500).send("Server Error");
  }
});

// Обработчик для добавления продукта
app.post("/products", async (req, res) => {
  try {
    const { name, price, quantity, category_id } = req.body;
    const result = await pool.query(
      "INSERT INTO products (name, price, quantity, category_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, price, quantity, category_id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error adding product:", err.message);
    res.status(500).send("Server Error");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});