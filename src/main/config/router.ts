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
import { ListBoardsController } from "../../app/controllers/board/ListBoardsController";
import { UpdateBoardController } from "../../app/controllers/board/UpdateBoardController";
import { FindBoardController } from "../../app/controllers/board/FindBoardController";
import { DeleteBoardController } from "../../app/controllers/board/DeleteBoardController";
import { CreateTaskController } from "../../app/controllers/task/CreateTaskController";
import { DeleteTaskController } from "../../app/controllers/task/DeleteTaskController";
import { FindTasksBoardController } from "../../app/controllers/task/FindTasksBoardController";

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

const listBoard = new ListBoardsController();
const createBoard = new CreateBoardController();
const updateBoard = new UpdateBoardController();
const findBoard = new FindBoardController();
const deleteBoard = new DeleteBoardController();

router.get("/board/:id", isAuth, findBoard.handler);
router.get("/board", isAuth, listBoard.handler);
router.post("/board", isAuth, createBoard.handler);
router.put("/board", isAuth, updateBoard.handler);
router.delete("/board/:id", isAuth, deleteBoard.handler);

const createTask = new CreateTaskController();
const deleteTask = new DeleteTaskController();
const findTaskBoard = new FindTasksBoardController();

router.get("/board/:boardId/task", isAuth, findTaskBoard.handler);
router.post("/task", isAuth, createTask.handler);
router.delete("/task/:id", isAuth, deleteTask.handler);

router.use(handlerExpressError);

export default router;