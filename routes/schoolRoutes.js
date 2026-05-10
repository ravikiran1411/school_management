
import express from "express"
import { addSchoolController, listSchoolController } from "../controllers/addSchoolController.js";

const schoolRouter = express.Router()

schoolRouter.post('/add',addSchoolController)

schoolRouter.get('/list',listSchoolController)

export default schoolRouter;
