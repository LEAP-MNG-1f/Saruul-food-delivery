import express from "express";
import cors from "cors";
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv'

const server = express();
server.use(cors());
const PORT = 8000;

server.get("/", (req, res) => {
  res.send(["hello world1", "hello Saruul"]);
});

server.post("/image-upload", async (req, res) => {
  try {
    cloudinary.config({ 
      cloud_name: 'de44zpryf', 
      api_key: "576363553371416", 
      api_secret: "e-wPQmmQzYbfl1iuJqWAiYkq714"
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