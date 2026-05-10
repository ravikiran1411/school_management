
import express from "express"
import { addSchoolController } from "../controllers/addSchoolController.js";

const schoolRouter = express.Router()

schoolRouter.post('/add',addSchoolController)

export default schoolRouter;
