import express from "express";

import {
  createUser,
  deleteAllUsers,
  deleteUserById,
  getUserById,
  getUsers,
  loginEmailPass,
  updateUserController,
} from "../controllers/usersController.js";

const router = express.Router();

// POST /user/login
router.post("/login", loginEmailPass);

// POST /user
router.post("/", createUser);

// GET /user
router.get("/", getUsers);

// DELETE /user
router.delete("/", deleteAllUsers);

// DELETE /user/:id
router.delete("/:id", deleteUserById);

// PUT /user/:id
router.patch("/:id", updateUserController);

// GET /user/:id
router.get("/:id", getUserById);

export default router;
