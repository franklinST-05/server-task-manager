import { Router } from "express";
import { CreateUserController } from "../../app/controllers/user/CreateUserController";
import { handlerExpressError } from "./handlers/express-error";
import "express-async-errors";
import { ActiveUserController } from "../../app/controllers/user/ActiveUserController";
import { AuthUserController } from "../../app/controllers/user/AuthUserController";

const router = Router();
const createUser = new CreateUserController();
const activeUser = new ActiveUserController();
const authUser = new AuthUserController();

router.post("/signin", authUser.handler);
router.post("/signup", createUser.handler);
router.post("/account/active/:token", activeUser.handler);
router.use(handlerExpressError);

export default router;