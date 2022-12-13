import express from "express";
import { validate } from "../middlewares/validation";
import { verifyToken } from "../middlewares/tokenHandler";
import { checkRole } from "../middlewares/roleHandler";
import { ROLE } from "../utils/constant";
import { addCategory } from "../controllers/category";
const { params, body } = require("express-validator");

const router = express.Router();

router.post("/", addCategory);

export default router;
