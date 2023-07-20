import { Router } from "express";
import "express-async-errors";

import { ActiveUserController } from "../../app/controllers/user/ActiveUserController";
import { AuthUserController } from "../../app/controllers/user/AuthUserController";
import { CreateUserController } from "../../app/controllers/user/CreateUserController";
import { handlerExpressError } from "./handlers/express-error";
import { RecoveryUserController } from "../../app/controllers/user/RecoveryUserController";
import { ChangePasswordUserController } from "../../app/controllers/user/ChangePasswordUserController";
import { CreateBoardController } from "../../app/controllers/board/CreateBoardController";
import { isAuth } from "./middlewares/isAuth";

const router = Router();

const createUser = new CreateUserController();
const activeUser = new ActiveUserController();
const authUser = new AuthUserController();
const recoveryUser = new RecoveryUserController();
const changePasswordUser = new ChangePasswordUserController();

router.post("/signin", authUser.handler);
router.post("/signup", createUser.handler);
router.post("/account/active/:token", activeUser.handler);
router.post("/account/recovery", recoveryUser.handler);
router.put("/account/recovery", changePasswordUser.handler);

const createBoard = new CreateBoardController();
router.post("/board", isAuth, createBoard.handler);

router.use(handlerExpressError);

export default router;