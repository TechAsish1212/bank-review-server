import { Request, Response } from "express";
import { Company } from "../model/company.model";

export const getAllCompanies = async (req: Request, res: Response) => {
  try {
    const companies = await Company.find().sort({ name: 1 });

    res.status(200).json({
      status: "Success",
      results: companies.length,
      data: {
        companies,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      status: "error",
      message: error.message || "Something went wrong",
    });
  }
};
