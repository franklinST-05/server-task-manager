import { Router } from "express";
import { CreateUserController } from "../../app/controllers/user/CreateUserController";
import { handlerExpressError } from "./handlers/express-error";
import "express-async-errors";
import { ActiveUserController } from "../../app/controllers/user/ActiveUserController";

const router = Router();
const createUser = new CreateUserController();
const activeUser = new ActiveUserController();

router.post("/signup", createUser.handler);
router.post("/account/active/:token", activeUser.handler);
router.use(handlerExpressError);

export default router;