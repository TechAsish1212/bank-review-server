import express, { NextFunction, Request, Response } from "express";
import { config } from "dotenv";
import connectDB from "./db/db";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { rateLimit } from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";

config();

const app = express();

// Database connection
connectDB();

// middleware
app.use(helmet()); // security headers
app.use(express.json()); // json parse
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  }),
);

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  limit: 10000, // 10000 requests per ip
  standardHeaders:'draft-8',
  legacyHeaders:false,
  message:{
    sucess: false,
    message:"Too many requests from this IP. Please try again after 1 Hour.",
  }
});

app.use("/api",limiter);

if(process.env.NODE_ENV=='development'){
  app.use(morgan('dev')); // http request log
}


// // MongoDB Injection Protection
// app.use(mongoSanitize());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend running successfully",
  });
});

app.listen(3001, () => {
  console.log("server started");
});
