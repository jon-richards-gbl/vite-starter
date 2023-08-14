import ImageModel, { addImage } from "../models/imageModel.js";

export const addImageController = async (req, res) => {
  try {
    const { user_id, alt_text, file_path } = req.body;
    console.log("req.body", req.body);
    console.log("req.file", req.file);

    // const filename = req.file.filename;
    const filename = req.file.originalname;
    console.log("filename", filename);

    const imageId = await addImage(user_id, filename, alt_text, file_path);
    console.log("imageId ", imageId);
    res.json({ id: imageId });
  } catch (error) {
    console.error("Error saving image metadata:", error);
    res.status(500).json({ message: "Error saving image metadata" });
  }
};

export const getAllImagesController = async (req, res) => {
  try {
    const image = await ImageModel.getAllImages();
    console.log("images:", image);
    res.status(200).json({ image: image });
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ message: "Failed to fetch images" });
  }
};

export const getImageByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    // Call the method from the model to retrieve the user by ID
    const image = await ImageModel.getImageById(id);

    if (image) {
      res.status(200).json({ image: image });
    } else {
      res.status(404).json({ message: "image not found" });
    }
  } catch (error) {
    console.error("Error fetching image by ID:", error);
    res.status(500).json({ message: "Failed to fetch image by ID" });
  }
};
