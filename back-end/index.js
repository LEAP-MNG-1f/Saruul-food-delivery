import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import connectionDb from "./connectDb.js";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import animeModel from "./model/anime.js";
import userRouter from "./routes/userRoute.js";

const server = express();
server.use(cors());
dotenv.config();
const PORT = 8000;

server.use("/api", userRouter);

mongoose.connect(
  "mongodb+srv://ace12d192:wap3TZLOZeJlgLIq@cluster0.s6jvj.mongodb.net/food-delivery"
);

server.post("/create", async (req, res) => {
  const result = await animeModel.create({
    name: "narutoooo",
    year: 1997,
  });
  res.json({
    success: true,
    data: result,
  });
});

server.delete("/delete", async (req, res) => {
  const result = await animeModel.deleteMany({
    genre: "animes",
  });
  res.json({
    success: true,
    data: result,
  });
});

server.get("/saruul", (req, res) => {
  res.send(["hello world1", "hello Saruul"]);
});

server.post("/image-upload", async (req, res) => {
  try {
    cloudinary.config({
      cloud_name: "de44zpryf",
      api_key: "576363553371416",
      api_secret: "e-wPQmmQzYbfl1iuJqWAiYkq714",
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

// server.get("/", async (req, res) => {

//   const db = await connectionDb();
//   let collection = db.collection("movies");
//   let result = await collection.find().limit(10).toArray();

//   res.json({
//     success: true,
//     data: result
//   })
// })

// server.post("/create-user", async (req, response) => {
//   const db = await connectionDb();

//   const collection = db.collection("product");
//   const result = await collection.insertOne(
//     {
//       name: "IPhone17",
//       email: "Saruul@gmail.com",
//       price:"12800000"
//     },
//  );

//   response.json({
//     succes: true,
//     data: result,
//   });
// });

// server.put("/update-user", async (req, response) => {
//   try {
//     const db = await connectionDb();
//     const collection = db.collection("product");

//     const result = await collection.updateMany(
//       {
//         _id: new ObjectId("6740035d806fed5521152a27"),
//       },
//       {
//         $set: {
//           owner: "saruul",
//           price:"8800",
//           date: new Date()
//         }
//       }
//     );
//     response.json({
//       success: true,
//       data: result,
//     });
//   } catch (error) {
//     console.error("Update failed:", error);
//     response.status(500).json({
//       success: false,
//       message: "An error occurred during the update operation.",
//       error: error.message,
//     });
//   }
// });

// server.delete("/delete-user", async (req, response) => {
//   const db = await connectionDb();

//   const collection = db.collection("product");
//   const result = await collection.deleteOne({
//     _id: new ObjectId("6740035d806fed5521152a27"),
//   });

//   response.json({
//     succes: true,
//     data: result,
//   });
// });

server.listen(PORT, () => {
  console.log(`server ajillaa http://localhost:${PORT}`);
});
