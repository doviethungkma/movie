import express, { Request, Response } from "express";
import { body } from "express-validator";
import { login, register } from "../controllers/user";
import { verifyToken } from "../middlewares/tokenHandler";
import { validate } from "../middlewares/validation";
import User from "../models/user";
import { HTTP_STATUS } from "../utils/constant";
const router = express.Router();

router.get("/", verifyToken, (req, res) => {
  verifyToken;
  res.status(200).json({
    msg: "This is user router",
  });
});

router.post(
  "/signup",
  body("username")
    .isLength({ min: 8 })
    .withMessage("Username must be at least 8 characters long"),
  body("username").not().isEmpty().withMessage("Username is required"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  body("username").custom((value) => {
    return User.findOne({ username: value }).then((user) => {
      if (user) {
        return Promise.reject("Username already exists");
      }
    });
  }),
  validate,
  register
);

router.post(
  "/login",
  body("username")
    .isLength({ min: 8 })
    .withMessage("Username must be at least 8 characters long"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  validate,
  login
);

router.post("/verify-token", verifyToken, (req: any, res: any) => {
  res.status(HTTP_STATUS.SUCCESS).json({
    id: req.user._id,
    username: req.user.username,
    status: req.user.status,
    role: req.user.role,
  });
});

export default router;
