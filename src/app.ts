import express from "express";
import peopleRouter from "./routes/people.routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Register routes
app.use("/api/v1/people", peopleRouter);

// Serve Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
