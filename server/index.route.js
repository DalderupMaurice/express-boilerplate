import { Router } from "express";

import userRoutes from "./endpoints/user/user.route";
import authRoutes from "./endpoints/auth/auth.route";

const router = Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get("/health-check", (req, res) => res.send("OK"));

// mount user routes at /users
router.use("/users", userRoutes);

// mount auth routes at /auth
router.use("/auth", authRoutes);

export default router;
