import express from "express";
import auth from "./auth";
import movie from "./movie";
import user from "./user";
const router = express.Router();

router.use("/auth", auth);
router.use("/movie", movie);
router.use("/user", user);

export default router;
