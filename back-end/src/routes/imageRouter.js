import express from "express";

import {
  addImageController,
  getAllImagesController,
  getImageByIdController,
} from "../controllers/imageController.js";

const router = express.Router();

router.post("/addImage", addImageController);

router.get("/addImage", getAllImagesController);

router.get("/:id", getImageByIdController);

export default router;
