import express from "express";
import logger from "./logger";
import { lookup } from "dns";

const PORT = 3000;

const app = express();

// add pino
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
