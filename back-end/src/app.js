import cors from "cors";
import express from "express";

import usersRouter from "./routes/usersRouter.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/user", usersRouter);

export default app;
