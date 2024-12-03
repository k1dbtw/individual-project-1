import express from "express";
import cors from "cors";
import pool from "../config/db.js"; // Подключение к базе данных

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Адрес вашего фронтенда
  })
);
app.options("*", cors()); // Разрешаем все OPTIONS запросы

app.use(express.json()); // Для парсинга JSON запросов

// Главная страница
app.get("/", (req, res) => {
  res.send("Welcome to the Stationery Store API!");
});

// Регистрация пользователя
app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Все поля обязательны" });
  }

  // Логика для добавления пользователя в базу данных
  // Пример (добавьте свою логику сохранения в базу данных)
  // pool.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`, [name, email, password], (err, result) => {
  //   if (err) {
  //     return res.status(500).json({ message: "Ошибка при регистрации" });
  //   }
  // });

  // Для простоты возвращаем успешный ответ
  res.status(201).json({ message: "Регистрация успешна" });
});

// Вход пользователя (для примера)
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Логика для проверки пользователя в базе данных
  // Пример
  if (email === "test@example.com" && password === "password123") {
    res.status(200).json({ token: "fake-jwt-token" }); // Возвращаем токен
  } else {
    res.status(401).json({ message: "Неверные данные для входа" });
  }
});

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});