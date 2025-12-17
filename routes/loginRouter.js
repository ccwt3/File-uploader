import express from "express";
const loginRouter = express.Router();
import * as loginController from "../controllers/loginController";

loginRouter.get("/", loginController.loginGet);
loginRouter.post("/", loginController.loginPost);

export default loginRouter;
