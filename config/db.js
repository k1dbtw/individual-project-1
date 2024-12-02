import pkg from "pg";  
const { Pool } = pkg;

const pool = new Pool({
  user: 'your_username',    // Убедись, что это правильный пользователь
  host: 'localhost',        // Проверь, что PostgreSQL работает на localhost
  database: 'your_database', // Имя базы данных
  password: 'your_password', // Правильный пароль
  port: 5432,               // Убедись, что порт правильный
});

export default pool;
