import { Router } from "express";
import { CreateUserController } from "../../app/controllers/user/CreateUserController";
const router = Router();

const a = new CreateUserController();

router.post("/signin", a.handler);

export default router;