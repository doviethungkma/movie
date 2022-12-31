import express from "express";
import auth from "./auth";
import movie from "./movie";
import user from "./user";
import category from "./category";
import comment from "./comment";
const router = express.Router();

router.use("/auth", auth);
router.use("/movie", movie);
router.use("/user", user);
router.use("/category", category);
router.use("/comment", comment);

export default router;
