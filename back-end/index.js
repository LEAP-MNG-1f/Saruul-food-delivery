import express from "express";

const server = express();
const PORT = 8000;

server.get("/", (req, res) => {
  res.send("hello world1");
});

server.listen(PORT, () => {
  console.log(`server ajillaa http://localhost:${PORT}`);
});
