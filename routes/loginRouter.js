import express from "express";
const loginRouter = express.Router();
import * as loginController from "../controllers/loginController";
import validator from "../middleware/validation/validation";
import check from "../middleware/validation/loginCheck";

loginRouter.get("/", loginController.loginGet);
loginRouter.post("/", validator, check, loginController.loginPost);

export default loginRouter;
