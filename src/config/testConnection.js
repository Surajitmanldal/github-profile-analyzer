import db from "./db.js";

db.connect((err) => {
    if (err) {
        console.error("Database Connection Failed:", err.message);
        return;
    }

    console.log("Database Connected Successfully");

    db.end();
});