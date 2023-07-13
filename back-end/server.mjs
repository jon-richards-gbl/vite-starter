import express from "express";
import pkg from "pg";

const { Client } = pkg;

const app = express();
const port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Create a new PostgreSQL client
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "Jimmy.David",
  // password: 'your_password',
  database: "Jimmy.David",
});

async function run() {
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

run();
