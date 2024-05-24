import express from "express";
import Image from "../Models/ImageModel.js";
import multer from "multer";
import cloudinary from "cloudinary";
import dotenv from "dotenv";

const uploadMiddleWare = multer({ dest: "uploads/" });
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const router = express.Router();

// Get all images
router.get("/", async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", uploadMiddleWare.single("file"), async (req, res) => {
  const { path } = req.file;

  try {
    // Upload file to Cloudinary
    const result = await cloudinary.uploader.upload(path);

    // Create a new Image with the Cloudinary URL
    const newProduct = new Image({
      imageUrl: result.secure_url, // Use the Cloudinary URL
    });

    await newProduct.save();

    res.status(200).json({
      message: "Image added successfully",
      imageUrl: result.secure_url,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete an image by ID
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deletedImage = await Image.findByIdAndDelete(id);

    if (!deletedImage) {
      return res.status(404).json({ message: "Image not found" });
    }

    res.json({ message: "Image deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
