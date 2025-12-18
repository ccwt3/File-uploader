import express from "express";
const registerRouter = express.Router();
import * as registerController from "../controllers/registerController";
import validator from "../middleware/validation/validation";
import check from "../middleware/validation/registerCheck";

registerRouter.get("/", registerController.registerGet);
registerRouter.post("/", validator, check, registerController.registerPost);

export default registerRouter;
