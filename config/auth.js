import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import pool from "../config/db.js"; // Подключение к базе данных

dotenv.config();

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token)
  if (!token) {
    return res.status(401).json({ message: "Нет доступа, токен не предоставлен" });
  }

  try {
    const decoded = jwt.verify(token, "my_super_secret_key");
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Недействительный токен" });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT role FROM users WHERE id = $1", [req.userId]);
    const user = result.rows[0];

    if (user?.role !== 'admin') {
      return res.status(403).json({ message: "Доступ разрешен только администратору" });
    }

    next();
  } catch (err) {
    console.error("Ошибка при проверке роли администратора:", err.message);
    res.status(500).json({ message: "Ошибка сервера" });
  }
};