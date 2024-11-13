import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
const PORT = 8000;

server.get("/", (req, res) => {
  res.send("hello world1");
});

server.listen(PORT, () => {
  console.log(`server ajillaa http://localhost:${PORT}`);
});
