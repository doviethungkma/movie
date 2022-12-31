import express from "express";
import { verifyToken } from "../middlewares/tokenHandler";
import { ROLE } from "../utils/constant";
import {
  addMovie,
  editMovie,
  getAllMovie,
  getMovieById,
  getMovierByCategoryId,
  getRandomMovie,
  searchMovie,
} from "./../controllers/movie";
import { checkRole } from "./../middlewares/roleHandler";
import { validate } from "./../middlewares/validation";
const router = express.Router();

//Add movie
router.post(
  "/",
  validate,
  verifyToken,
  checkRole([ROLE.ADMIN, ROLE.MOD]),
  addMovie
);

//Search movie
router.get("/search", searchMovie);

//Get movie by id
router.get("/:movieId", getMovieById); //for all user so not check token and role

//Get random movie
router.get("/random/:ranSize", getRandomMovie);

//Get movie by category
router.get("/category/:categoryId", getMovierByCategoryId);

//Get all movie
router.get("/", getAllMovie); //for all user so not check token and role

//update movie
router.put(
  "/:movieId",
  validate,
  verifyToken,
  checkRole([ROLE.ADMIN, ROLE.MOD]),
  editMovie
);

export default router;
