import { Router } from "express";
import { register } from "../controllers/user";

//API
const router = Router();
router.post('/register', register);
export default router;