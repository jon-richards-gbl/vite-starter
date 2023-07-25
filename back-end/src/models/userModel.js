import db from "../database/db.js";

export const createUser = async (
  f_name,
  l_name,
  age,
  email,
  pic,
  hashedPass
) => {
  const query =
    "INSERT INTO bh_users (f_name, l_name, age, email, pic, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
  const values = [f_name, l_name, age, email, pic, hashedPass.trim()];
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

//   email = email.trim();
//   password = password.trim();
//   console.log("Received email:", email);
//   console.log("Received password:", password);

//   const query =
//     "SELECT *, password AS hashedPass FROM bh_users WHERE email = $1";

//   const result = await db.query(query, [email]);

//   console.log("Result from the database:", result.rows);

//   if (result.rows.length === 0) {
//     console.log("User not found");
//     return null;
//   }

//   const user = result.rows[0];
//   const isPasswordCorrect = await bcrypt.compare(
//     password,
//     user.password.trim()
//   );
//   console.log("Is password correct?", isPasswordCorrect);
//   console.log("Hashed password in the database:", user.password);
//   console.log("Hashed?:", user.hashedpass);
//   console.log("Is password correct?", isPasswordCorrect);

//   if (isPasswordCorrect) {
//     console.log("Login successful");
//     return user;
//   } else {
//     console.log("Invalid password");
//     return null;
//   }
// };

export const loginEmailPass = async (email) => {
  const query = "SELECT * FROM bh_users WHERE email = $1";
  const result = await db.query(query, [email]);

  if (result.rows.length === 0) {
    // User not found, handle the error or return null/undefined
    return null;
  }

  const user = result.rows[0];
  console.log("Result from the database:", result.rows);

  // Return the user object retrieved from the database
  return user;
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
