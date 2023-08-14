import db from "../database/db.js";

export const addImage = async (user_id, filename, alt_text, file_path) => {
  try {
    const query = `
        INSERT INTO images (user_id, filename,  alt_text, file_path)
        VALUES ($1, $2, $3, $4 )
        RETURNING id`;

    const values = [user_id, filename, alt_text, file_path];

    const result = await db.query(query, values);

    return result.rows[0].id; // Return the ID of the inserted image
  } catch (error) {
    throw new Error("Error adding image: " + error.message);
  }
};

export const getAllImages = async () => {
  const query = "SELECT * FROM images";
  const result = await db.query(query);
  return result.rows;
};

export const getImageById = async (imageId) => {
  const query = "SELECT * FROM images WHERE id =$1";
  const values = [imageId];
  const result = await db.query(query, values);
  return result.rows;
};

const ImageModel = {
  addImage,
  getAllImages,
  getImageById,
};

export default ImageModel;
