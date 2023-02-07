import dotenv from "dotenv";
import express from "express";
import routes from "./routes/email";
import cors from "cors";
import { protectedRoute } from "./middleware/protected";
import logger from "./logger";
import { connentDB } from "./config/db";

dotenv.config();
const PORT = process.env.NODE_DOCKER_PORT || 8080;

const app = express();
connentDB();
app.use(express.json());
app.use(protectedRoute);
app.use(cors());
app.use("/api/v1", routes);

app.listen(PORT, () => {
  logger.info(`Server running on port: ${PORT}`);
});
