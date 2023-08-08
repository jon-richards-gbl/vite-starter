// import express from "express";
// import multer from "multer";

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// router.post(
//   "/upload-profile-picture",
//   upload.single("profilePicture"),
//   (req, res) => {
//     if (!req.file) {
//       return res.status(400).json({ error: "No file uploaded" });
//     }

//     const filePath = req.file.path;
//     return res
//       .status(200)
//       .json({ message: "File uploaded successfully", filePath });
//   }
// );

// export default router;
