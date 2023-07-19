import { Router } from "express";
import { CreateUserController } from "../../app/controllers/user/CreateUserController";
import { handlerExpressError } from "./handlers/express-error";
import "express-async-errors";

const router = Router();
const createUser = new CreateUserController();

router.post("/signup", createUser.handler);
router.use(handlerExpressError);

export default router;