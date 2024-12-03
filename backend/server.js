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

app.use(express.json()); // Для парсинга JSON запросов

// Главная страница
app.get("/", (req, res) => {
  res.send("Welcome to the Stationery Store API!");
});

// Регистрация пользователя
app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Все поля обязательны" });
  }

  try {
    // Проверка, существует ли уже пользователь с таким email
    const checkUser = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    
    if (checkUser.rows.length > 0) {
      return res.status(400).json({ message: "Пользователь с таким email уже существует" });
    }

    // Добавление пользователя в базу данных
    const newUser = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, password]
    );
    
    res.status(201).json({ message: "Регистрация успешна", user: newUser.rows[0] });
  } catch (err) {
    console.error("Ошибка при регистрации:", err.message);
    res.status(500).json({ message: "Ошибка при регистрации" });
  }
});

// Вход пользователя
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email и пароль обязательны" });
  }

  try {
    // Поиск пользователя в базе данных
    const user = await pool.query(
      "SELECT * FROM users WHERE email = $1 AND password = $2",
      [email, password]
    );

    if (user.rows.length === 0) {
      return res.status(401).json({ message: "Неверные данные для входа" });
    }

    // Возвращаем токен (простой пример, для реального приложения используйте JWT)
    const token = "fake-jwt-token"; // Это место для реального токена (например, JWT)
    res.status(200).json({ token });
  } catch (err) {
    console.error("Ошибка при входе:", err.message);
    res.status(500).json({ message: "Ошибка при входе" });
  }
});

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});