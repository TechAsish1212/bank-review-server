import { Router } from "express";
import companyRouter from "./company.route";

const routes=Router();

routes.use('/company',companyRouter);

export default routes;