import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pool from "../config/db.js"; // Не забудь добавить расширение .js
import bcrypt from "bcrypt";

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

// Обработчик для регистрации пользователя
app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Все поля обязательны для заполнения" });
  }

  try {
    // Проверим, есть ли уже пользователь с таким email
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rows.length > 0) {
      return res
        .status(400)
        .json({ message: "Пользователь с таким email уже существует" });
    }

    // Добавим нового пользователя в базу данных
    const newUser = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, password] // Замените на хэширование пароля в реальном проекте
    );

    // Ответ с данными нового пользователя (можно изменить)
    res.status(201).json({
      message: "Регистрация успешна!",
      user: newUser.rows[0], // Это возвращает данные нового пользователя
    });
  } catch (err) {
    console.error("Ошибка при регистрации пользователя:", err.message);
    res.status(500).send("Произошла ошибка на сервере");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
