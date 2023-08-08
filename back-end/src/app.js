import cors from "cors";
import express from "express";
import multer from "multer";

import { createUser } from "./controllers/usersController.js";
import usersRouter from "./routes/usersRouter.js";

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
    console.log("file", file);
  },
});

const upload = multer({ storage: storage });

app.use(express.json());
app.use(cors());

app.post("/register", upload.single("profilePicture"), createUser);

app.use("/user", usersRouter);

export default app;
