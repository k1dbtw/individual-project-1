import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import pool from "../config/db.js"; // Подключение к базе данных
import { verifyToken, isAdmin } from "./auth.js"; // Подключение проверок

dotenv.config();
const app = express();

app.use(cors({ origin: "http://localhost:5173" })); // Разрешаем доступ с фронтенда
app.use(express.json()); // Для обработки JSON

// Получение всех продуктов
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

app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const { name, price, quantity } = req.body;

  try {
    await pool.query(
      "UPDATE products SET name = $1, price = $2, quantity = $3 WHERE id = $4",
      [name, price, quantity, id]
    );
    res.status(200).json({ message: "Продукт обновлен" });
  } catch (err) {
    console.error("Ошибка при обновлении продукта:", err.message);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

// Удаление продукта
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM products WHERE id = $1", [id]);
    res.status(200).json({ message: "Продукт удален" });
  } catch (err) {
    console.error("Ошибка при удалении продукта:", err.message);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});


app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Все поля обязательны" });
  }

  try {
    const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: "Пользователь с таким email уже существует" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const role = email === "admin@gmail.com" ? "admin" : "user"; // Роль админа для admin@gmail.com

    const result = await pool.query(
      "INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id",
      [name, email, hashedPassword, role]
    );

    const userId = result.rows[0].id;
    res.status(201).json({ message: "Пользователь зарегистрирован", userId });
  } catch (error) {
    console.error("Ошибка при регистрации пользователя:", error.message);
    res.status(500).json({ message: "Ошибка сервера при регистрации" });
  }
});

// Логин пользователя
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Все поля обязательны" });
  }

  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(400).json({ message: "Неверный email или пароль" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Неверный email или пароль" });
    }
    const token = jwt.sign({ userId: user.id, role: user.role }, "my_super_secret_key", {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Вход выполнен", token, role:result.rows[0].role });
  } catch (error) {
    console.error("Ошибка при входе пользователя:", error.message);
    res.status(500).json({ message: "Ошибка сервера при входе" });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

