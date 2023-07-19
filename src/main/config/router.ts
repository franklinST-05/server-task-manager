import { Router } from "express";
import "express-async-errors";

import { ActiveUserController } from "../../app/controllers/user/ActiveUserController";
import { AuthUserController } from "../../app/controllers/user/AuthUserController";
import { CreateUserController } from "../../app/controllers/user/CreateUserController";
import { handlerExpressError } from "./handlers/express-error";
import { RecoveryUserController } from "../../app/controllers/user/RecoveryUserController";

const router = Router();

const createUser = new CreateUserController();
const activeUser = new ActiveUserController();
const authUser = new AuthUserController();
const recoveryUser = new RecoveryUserController();

router.post("/signin", authUser.handler);
router.post("/signup", createUser.handler);
router.post("/account/active/:token", activeUser.handler);
router.post("/account/recovery/", recoveryUser.handler);

router.use(handlerExpressError);

export default router;