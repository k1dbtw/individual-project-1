import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost", 
  database: "stationery_store", 
  password: "0604", 
  port: 5432, 
});

export default pool;