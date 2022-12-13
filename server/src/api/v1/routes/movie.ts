import express from "express";
import { validate } from "./../middlewares/validation";
import {
  addMovie,
  editMovie,
  getAllMovie,
  getMovieById,
  getMovierByCategoryId,
  getRandomMovie,
  searchMovie,
} from "./../controllers/movie";
import { verifyToken } from "../middlewares/tokenHandler";
import { checkRole } from "./../middlewares/roleHandler";
import { ROLE } from "../utils/constant";
const router = express.Router();

router.post(
  "/",
  validate,
  verifyToken,
  checkRole([ROLE.ADMIN, ROLE.MOD]),
  addMovie
);
router.get("/search", searchMovie);

router.get("/:movieId", getMovieById); //for all user so not check token and role

router.get("/random/:ranSize", getRandomMovie);

router.get("/category/:categoryId", getMovierByCategoryId);

router.get("/", getAllMovie); //for all user so not check token and role

router.put(
  "/:movieId",
  validate,
  verifyToken,
  checkRole([ROLE.ADMIN, ROLE.MOD]),
  editMovie
);

export default router;
