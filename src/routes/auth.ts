import { Router } from "express";
const router = Router();

import * as authCtrl from "../controllers/auth.controller";
import { verifyRefreshToken } from "../middlewares/authJWT";

router.post("/signup", authCtrl.signup);
router.post("/signin", authCtrl.signin);
router.post("/refresh", verifyRefreshToken, authCtrl.refresh);

export default router;