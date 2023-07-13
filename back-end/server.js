import express from "express";
import pkg from "pg";

import usersRouter from "./src/routes/users.js";

const { Client } = pkg;

const app = express();
const port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.use(express.json());
app.use("/users", usersRouter);

// Create a new PostgreSQL client
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "Jimmy.David",
  // password: 'your_password',
  database: "Jimmy.David",
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to the database");

    const query = "SELECT * FROM bh_users";
    const result = await client.query(query);
    console.log("Query result:", result.rows);
  } catch (error) {
    console.error("Error executing query:", error);
  } finally {
    await client.end();
    console.log("Database connection closed");
  }
}

connectToDatabase();
