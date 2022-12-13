import express from "express";
import { validate } from "./../middlewares/validation";
import {
  getAllUser,
  getUserById,
  getUserDetail,
  renewPackage,
  updateUser,
  updateUserDetail,
} from "./../controllers/user";
import { verifyToken } from "../middlewares/tokenHandler";
import { checkRole } from "../middlewares/roleHandler";
import { ROLE } from "../utils/constant";
const { params, body } = require("express-validator");

const router = express.Router();

router.get("/", validate, verifyToken, checkRole([ROLE.ADMIN]), getAllUser);

router.get(
  "/:userId",
  validate,
  verifyToken,
  checkRole([ROLE.ADMIN, ROLE.MOD]),
  getUserById
);

router.put(
  "/:userId",
  validate,
  verifyToken,
  checkRole([ROLE.ADMIN]),
  updateUser
);

router.put("/detail/:userId", validate, verifyToken, updateUserDetail);
router.get("/detail/:userId", validate, verifyToken, getUserDetail);

router.put(
  "/:userId/:packageId/:packageMonth",
  validate,
  verifyToken,
  checkRole([ROLE.ADMIN]),
  renewPackage
);

export default router;
