import express from "express";
import { config } from "dotenv";

config();

const app = express();

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend running successfully",
  });
});

app.listen(3001, () => {
  console.log("server started");
});
