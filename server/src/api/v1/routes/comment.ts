import express from "express";
import { verifyToken } from "../middlewares/tokenHandler";
import { addComment, getCommentByMovie } from "./../controllers/comment";
import { validate } from "./../middlewares/validation";
const { params, body } = require("express-validator");

const router = express.Router();

//get comment by movie
router.get("/movie/:movieId", getCommentByMovie);

//Add comment
router.post("/", verifyToken, addComment);

export default router;
