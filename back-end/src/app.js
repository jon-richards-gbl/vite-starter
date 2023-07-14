import express from "express";

import usersRouter from "./routes/usersRouter.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/user", usersRouter);

export default app;
