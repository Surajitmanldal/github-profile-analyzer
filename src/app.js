import express from "express";

const app = express();
import profileRoutes from "./routes/profileRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "GitHub Profile Analyzer API"
    });
});
app.use("/api", profileRoutes)
app.use(errorHandler);
export default app;