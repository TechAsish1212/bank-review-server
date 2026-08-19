import express from "express";
import { config } from "dotenv";
import connectDB from "./db/db";


config();

const app = express();




// Database connection
connectDB();



app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend running successfully",
  });
});

app.listen(3001, () => {
  console.log("server started");
});
