import express from "express";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  console.log("hello world");
  res.status(200).send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});