import express from "express";
import pkg from "pg";

const router = express.Router();

const { Client } = pkg;

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "Jimmy.David",
  // password: 'your_password',
  database: "Jimmy.David",
});

client.connect();

// POST /users
router.post("/", async (req, res) => {
  try {
    const { f_name, l_name, age } = req.body;

    // Perform the necessary validation and data processing
    // ...

    // Insert the new user into the database
    const query =
      "INSERT INTO bh_users (f_name, l_name, age) VALUES ($1, $2, $3) RETURNING *";
    const values = [f_name, l_name, age];
    const result = await client.query(query, values);

    // Return the created user in the response
    res
      .status(201)
      .json({ message: "User created successfully", user: result.rows[0] });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Failed to create user" });
  }
});

export default router;
