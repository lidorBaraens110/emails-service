import mongoose from "mongoose";

const emailLogSchema = new mongoose.Schema({
  to: { type: String, required: true },
  subject: String,
  "text/html": String,
});

export const EmailLog = mongoose.model("EmailLog", emailLogSchema);
