import mongoose, { ConnectOptions } from "mongoose";
import express from "express";
import logger from "./logger";
import connection from "./connection";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.NODE_DOCKER_PORT || 5000;

const app = express();
app.use(express.json());
connection();

app.get("/", (req, res) => {
  logger.info("hello world");
  logger.error("hello world");
  logger.warn("hello world");
  logger.fatal("hello world");

  res.status(200).send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
