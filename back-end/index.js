import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import foodRouter from "./routes/foodRoute.js";
import orderRouter from "./routes/orderRoute.js";
import categoryRouter from "./routes/categoryRoute.js";
// Removed body-parser import, we use express's built-in methods

const server = express();
server.use(cors());
dotenv.config();
const PORT = 8000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/api", userRouter);
server.use("/api", orderRouter);
server.use("/api", foodRouter);
server.use("/api", categoryRouter);

mongoose.connect(
  "mongodb+srv://saruultumed11:ntlSVQ7OJxT9xRiH@clustersaruul.c6pcm.mongodb.net/foodDB"
);

server.post("/image-upload", async (req, res) => {
  try {
    cloudinary.config({
      cloud_name: "de44zpryf",
      api_key: CLOUDINARY_API_KEY,
      api_secret: CLOUDINARY_API_SECRET,
    });

    const uploadResults = [];
    const imagesToUpload = [
      "./assets/burger.webp",
      "./assets/barbaque.jpg",
      "./assets/spaghetti.jpg",
      "./assets/tahia.jpeg",
    ];

    for (const imagePath of imagesToUpload) {
      const result = await cloudinary.uploader.upload(imagePath);
      uploadResults.push(result);
    }

    console.log("Upload results:", uploadResults);
    res.json(uploadResults);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to upload images" });
  }
});

server.listen(PORT, () => {
  console.log(`server ajillaa http://localhost:${PORT}`);
});
