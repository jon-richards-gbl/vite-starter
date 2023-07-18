import cors from "cors";
import express from "express";

import usersRouter from "./routes/usersRouter.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/user", usersRouter);
// app.use("/login", usersRouter);

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

export default app;
