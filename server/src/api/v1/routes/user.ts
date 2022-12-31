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

//get all user
router.get("/", validate, verifyToken, checkRole([ROLE.ADMIN]), getAllUser);

//get user by id
router.get(
  "/:userId",
  validate,
  verifyToken,
  checkRole([ROLE.ADMIN, ROLE.MOD]),
  getUserById
);

//update user (role, status)
router.put(
  "/:userId",
  validate,
  verifyToken,
  checkRole([ROLE.ADMIN]),
  updateUser
);

//update user detail (name, email, phone, gender)
router.put("/detail/:userId", validate, verifyToken, updateUserDetail);

//get user detail
router.get("/detail/:userId", validate, verifyToken, getUserDetail);

// //Renew package
// router.put(
//   "/:userId/:packageId/:packageMonth",
//   validate,
//   verifyToken,
//   checkRole([ROLE.ADMIN]),
//   renewPackage
// );

export default router;
