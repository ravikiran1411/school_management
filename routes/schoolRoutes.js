
import express from "express"
import { addSchoolController, listSchoolController } from "../controllers/addSchoolController.js";

const schoolRouter = express.Router()

schoolRouter.post('/addSchool',addSchoolController)

schoolRouter.get('/listSchools',listSchoolController)

export default schoolRouter;
