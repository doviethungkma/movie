import express from "express";
import { getAllUser, updateUser } from "./../controllers/user";

const router = express.Router();

router.get("/", getAllUser);

router.put("/:userId", updateUser);

export default router;
