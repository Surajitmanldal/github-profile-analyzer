import pool from "./db.js";

try {
    const connection = await pool.getConnection();

    console.log("Database Connected Successfully");

    connection.release();
} catch (error) {
    console.error(error.message);
}