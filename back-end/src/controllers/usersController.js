import UserModel, { updateUser } from "../models/userModel.js";

// POST /users
// export const createUser = async (req, res) => {
//   try {
//     const { f_name, l_name, age } = req.body;
//     const user = await UserModel.createUser(f_name, l_name, age);
//     res.status(201).json({ message: "User created successfully", user });
//   } catch (error) {
//     console.error("Error creating user:", error);
//     res.status(500).json({ message: "Failed to create user" });
//   }
// };

// POST /users
export const createUser = async (req, res) => {
  try {
    const { f_name, l_name, age, email, pic } = req.body;
    const user = await UserModel.createUser(f_name, l_name, age, email, pic);
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Failed to create user" });
  }
};

// GET /users
export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.getAllUsers();
    res.status(200).json({ users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

// GET /user by ID
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    // Call the method from the model to retrieve the user by ID
    const user = await UserModel.getUserById(id);

    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).json({ message: "Failed to fetch user by ID" });
  }
};

// DELETE /users
export const deleteAllUsers = async (req, res) => {
  try {
    await UserModel.deleteAllUsers();
    res.status(200).json({ message: "All users deleted successfully" });
  } catch (error) {
    console.error("Error deleting users:", error);
    res.status(500).json({ message: "Failed to delete users" });
  }
};

// DELETE /user by ID
export const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;

    // Call the method from the model to delete the user by ID
    await UserModel.deleteUserById(id);

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user by ID:", error);
    res.status(500).json({ message: "Failed to delete user" });
  }
};

// UPDATE /users
export const updateUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const { f_name, l_name, age, email, pic } = req.body;

    // Call the updateUser method from the model
    await updateUser(id, { f_name, l_name, age, email, pic });

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Failed to update user" });
  }
};
