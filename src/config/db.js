import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: false
    },
});
db.connect((err) => {
    if (err) {
        console.log("DB connection error:", err);
    } else {
        console.log("DB connected successfully");
    }
});

export default pool;