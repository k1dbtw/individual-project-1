import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  user: "postgres", // Укажите ваш логин в базе данных
  host: "localhost", // Если база данных работает на локальной машине
  database: "stationery_store", // Укажите название базы данных
  password: "0604", // Укажите пароль
  port: 5432, // Порт по умолчанию для PostgreSQL
});

export default pool;