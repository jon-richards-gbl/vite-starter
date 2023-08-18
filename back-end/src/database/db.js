import pkg from "pg";

const { Client } = pkg;

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "Jimmy.David",
  // password: 'your_password',
  database: "Jimmy.David",
});

client.connect();

export default client;
