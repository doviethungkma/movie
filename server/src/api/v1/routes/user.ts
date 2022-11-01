import express from "express";
import { getAllUser, renewPackage, updateUser } from "./../controllers/user";

const router = express.Router();

router.get("/", getAllUser);

router.put("/:userId", updateUser);

router.put("/:userId/:packageId/:packageMonth", renewPackage);

export default router;
