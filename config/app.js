import express from 'express';
import bcrypt from "bcrypt"
import dotenv from "dotenv"
import pool from '../config/db'

dotenv.config();

const app = express();
app.use(express.json());


// Регистрация
app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;

  // Хеширование пароля
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const result = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id',
      [name, email, hashedPassword]
    );

    const userId = result.rows[0].id;
    res.status(201).json({ message: 'Пользователь зарегистрирован', userId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка регистрации' });
  }
});

// Вход
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(400).json({ message: 'Неверный email или пароль' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Неверный email или пароль' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка входа' });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});