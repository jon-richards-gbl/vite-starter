import multer from "multer";

import addImage from "../models/imageModel.js";

// Set up Multer storage for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
    console.log("o,g", file.originalname);
  },
});

const upload = multer({ storage: storage }).single("profilePicture");
console.log("uploads", upload);

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
