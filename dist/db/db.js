"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DB_NAME = 'review-bank';
const connectDB = async () => {
    try {
        const connIns = await mongoose_1.default.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\nDatabase connected successfully!! DB HOST: ${connIns.connection.host}`);
    }
    catch (error) {
        console.log("Error connecting to DB", error.message);
        process.exit(1);
    }
};
exports.default = connectDB;
