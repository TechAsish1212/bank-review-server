import { Request, Response } from "express";
import { Company } from "../model/company.model";
import { config } from "dotenv";
config();
import connectDB from "../db/db";
import mongoose from "mongoose";

const banks = [
  // Public Sector Banks
  "State Bank of India",
  "Punjab National Bank",
  "Bank of Baroda",
  "Canara Bank",
  "Union Bank of India",
  "Indian Bank",
  "Bank of India",
  "Central Bank of India",
  "Indian Overseas Bank",
  "UCO Bank",
  "Punjab & Sind Bank",

  // Private Sector Banks
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "Kotak Mahindra Bank",
  "IndusInd Bank",
  "Yes Bank",
  "IDBI Bank",
  "Federal Bank",
  "South Indian Bank",
  "RBL Bank",
  "Bandhan Bank",
  "IDFC FIRST Bank",
  "Karnataka Bank",
  "Karur Vysya Bank",
  "City Union Bank",
  "Tamilnad Mercantile Bank",
  "DCB Bank",
  "CSB Bank",
  "Nainital Bank",
  "Jammu & Kashmir Bank",
  "Dhanlaxmi Bank",

  // Small Finance Banks
  "AU Small Finance Bank",
  "Equitas Small Finance Bank",
  "Ujjivan Small Finance Bank",
  "Jana Small Finance Bank",
  "ESAF Small Finance Bank",
  "Suryoday Small Finance Bank",
  "Utkarsh Small Finance Bank",
  "North East Small Finance Bank",
  "Capital Small Finance Bank",
  "Shivalik Small Finance Bank",

  // Payments Banks
  "Airtel Payments Bank",
  "India Post Payments Bank",
  "Paytm Payments Bank",
  "Fino Payments Bank",
  "NSDL Payments Bank",

  // Foreign Banks in India
  "HSBC Bank",
  "Standard Chartered Bank",
  "Citibank",
  "Deutsche Bank",
  "Barclays Bank",
  "Bank of America",
  "JPMorgan Chase Bank",
  "BNP Paribas",
  "DBS Bank",
  "MUFG Bank",
  "Mizuho Bank",
  "Societe Generale",
  // State-Owned Commercial Banks
  "Sonali Bank PLC",
  "Janata Bank PLC",
  "Agrani Bank PLC",
  "Rupali Bank PLC",

  // Specialized Banks
  "Bangladesh Krishi Bank",
  "Rajshahi Krishi Unnayan Bank",
  "Probashi Kallyan Bank",

  // Private Commercial Banks
  "AB Bank PLC",
  "Al-Arafah Islami Bank PLC",
  "Bangladesh Commerce Bank PLC",
  "Bank Asia PLC",
  "BRAC Bank PLC",
  "Community Bank Bangladesh PLC",
  "Dhaka Bank PLC",
  "Dutch-Bangla Bank PLC",
  "Eastern Bank PLC",
  "EXIM Bank PLC",
  "First Security Islami Bank PLC",
  "Global Islami Bank PLC",
  "IFIC Bank PLC",
  "Islami Bank Bangladesh PLC",
  "Jamuna Bank PLC",
  "Meghna Bank PLC",
  "Mercantile Bank PLC",
  "Midland Bank PLC",
  "Modhumoti Bank PLC",
  "Mutual Trust Bank PLC",
  "National Bank PLC",
  "National Credit and Commerce Bank PLC",
  "NRB Bank PLC",
  "NRB Commercial Bank PLC",
  "NRBC Bank PLC",
  "One Bank PLC",
  "Padma Bank PLC",
  "Premier Bank PLC",
  "Prime Bank PLC",
  "Pubali Bank PLC",
  "Southeast Bank PLC",
  "Shahjalal Islami Bank PLC",
  "Social Islami Bank PLC",
  "Standard Bank PLC",
  "The City Bank PLC",
  "Trust Bank PLC",
  "Union Bank PLC",
  "United Commercial Bank PLC",
  "United Finance Bank PLC",
  "Uttara Bank PLC",

  // Foreign Commercial Banks
  "Citibank N.A.",
  "HSBC Bangladesh",
  "Standard Chartered Bangladesh",
  "Commercial Bank of Ceylon",
  "State Bank of India Bangladesh",
  "Woori Bank Bangladesh",
  "Habib Bank Limited Bangladesh",
  "National Bank of Pakistan Bangladesh",
];

export const addCompanies = async () => {
  try {
    await Company.deleteMany();

    const formatted = banks.map((name) => ({
      name: name.trim(),
      totalReviews: 0,
      positiveCount: 0,
      negativeCount: 0,
      neutralCount: 0,
      reviews: [],
    }));

    await Company.insertMany(formatted);
    console.log("Companies added successfully.");
  } catch (error: any) {
    console.log("Error Adding compaines", error);
  }
};

const deleteCompanies = async () => {
  try {
    await Company.deleteMany();
    console.log("All Companies Deleted Successfully");
  } catch (error: any) {
    console.log("Error Deleting companies", error);
  }
};

const run = async () => {
  try {
    await connectDB();
    const arg = process.argv[2];
    if (arg === "--add") {
      await addCompanies();
    } else if (arg === "--delete") {
      await deleteCompanies();
    } else {
      console.log(" Use --add to add company or --delete to delete company");
      process.exit(0);
    }
  } catch (error) {
    console.log(error)
  }finally{
    await mongoose.disconnect();
  }
};

run();
