import { Router } from "express";
import { getAllCompanies } from "../controllers/company.controller";

const companyRouter=Router();

companyRouter.get('/all',getAllCompanies);

export default companyRouter;