import express from "express";
import peopleRouter from "./routes/people.routes";

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Register routes
app.use("/people", peopleRouter);

export default app;
