import express from "express";
import auth from "./auth";
import movie from "./movie";
const router = express.Router();

router.use("/auth", auth);
router.use("/movie", movie);

export default router;
