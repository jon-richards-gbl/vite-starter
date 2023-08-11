import express from "express";

// import profilePictureController from "../controllers/profilePictureController.js";
import { addImageController } from "../controllers/imageController.js";

const router = express.Router();

router.post("/addImage", addImageController);

module.exports = router;
