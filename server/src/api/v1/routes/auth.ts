import express from "express";
const router = express.Router();
import { verifyToken } from "../middlewares/tokenHandler";
import { register, login } from "../controllers/user";
import { body } from "express-validator";
import User from "../models/user";
import { validate } from "../middlewares/validation";

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

export default router;
