import express from "express";

import {
  addImageController,
  getAllImagesController,
  getImageByIdController,
  getImageByUserIdController,
} from "../controllers/imageController.js";

const router = express.Router();

router.post("/addImage", addImageController);

router.get("/addImage", getAllImagesController);

router.get("/:id", getImageByIdController);

router.get("/:userId/image", getImageByUserIdController);

export default router;
