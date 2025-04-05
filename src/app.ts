import express from "express";
import peopleRouter from "./routes/people.routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import helmet from "helmet";
import cors from "cors";

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Register routes
app.use("/api/v1/people", peopleRouter);

// Serve Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
