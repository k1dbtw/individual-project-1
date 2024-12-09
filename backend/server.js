import express from "express";
import cors from "cors";
import pool from "../config/db.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Stationery Store API!");
});

app.get("/api/products", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, name, price, quantity, category_id, image_url FROM products"
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Ошибка при получении продуктов:", err.message);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});