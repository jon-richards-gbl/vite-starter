import db from "../database/db.js";

export const createUser = async (f_name, l_name, age, email, pic, password) => {
  const query =
    "INSERT INTO bh_users (f_name, l_name, age, email, pic, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
  const values = [f_name, l_name, age, email, pic, password];
  const result = await db.query(query, values);
  return result.rows[0];
};

export const getAllUsers = async () => {
  const query = "SELECT * FROM bh_users";

  const result = await db.query(query);
  return result.rows;
};

export const getUserById = async (userId) => {
  const query = "SELECT * FROM bh_users WHERE id =$1";
  const values = [userId];
  const result = await db.query(query, values);
  return result.rows;
};

export const deleteAllUsers = async () => {
  const query = "DELETE FROM bh_users";
  await db.query(query);
};

export const deleteUserById = async (userId) => {
  const query = "DELETE FROM bh_users WHERE id =$1";
  const values = [userId];
  await db.query(query, values);
};

export const updateUser = async (userId, newData) => {
  const query =
    "UPDATE bh_users SET f_name = $1, l_name = $2, age = $3, email = $4, pic = $5 WHERE id = $6";
  const values = [
    newData.f_name,
    newData.l_name,
    newData.age,
    newData.email,
    newData.pic,
    userId,
  ];
  await db.query(query, values);
};

export const loginEmailPass = async (email, password) => {
  const query = "SELECT * FROM bh_users WHERE email = $1 AND password = $2";

  const values = [email, password];
  const result = await db.query(query, values);
  return result.rows[0];
};

const UserModel = {
  createUser,
  getAllUsers,
  deleteAllUsers,
  updateUser,
  getUserById,
  deleteUserById,
  loginEmailPass,
};

export default UserModel;
