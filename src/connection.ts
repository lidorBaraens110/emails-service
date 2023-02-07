import mongoose, { ConnectOptions } from "mongoose";

export default () => {
  const { DB_USER, DB_PASSWORD, DB_HOST, DB_LOCAL_PORT, DB_DATABASE } =
    process.env;
  const url = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_LOCAL_PORT}/${DB_DATABASE}?authSource=admin`;
  mongoose.set("strictQuery", false);
  mongoose.connect(url);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });
};
