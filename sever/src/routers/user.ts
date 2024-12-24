import { Router } from "express";
import { register, login } from "../controllers/user";
//API
const router = Router();
router.post('/register', register);
router.post('/login', login);
export default router;