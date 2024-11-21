import express from "express";
import cors from "cors";
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv'
import connectionDb from "./connectDb.js";

const server = express();
server.use(cors());
dotenv.config()
const PORT = 8000;

server.get("/saruul", (req, res) => {
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

server.get("/", async (req, res) => {

  const db = await connectionDb();
  let collection = db.collection("movies");
  let result = await collection.find().limit(10).toArray();

  res.json({
    success: true,
    data: result
  })
})

server.listen(PORT, () => {
  console.log(`server ajillaa http://localhost:${PORT}`);
});