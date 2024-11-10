import { NextFunction, Request, Response, Router } from "express";
import UserController from "../controller/UserController";

const router = Router();
const controller = new UserController();

router.get("/get", (req: Request, res: Response, next: NextFunction) => {
  controller.getUser(req, res).catch((erro) => next(erro));
});

export default router;
