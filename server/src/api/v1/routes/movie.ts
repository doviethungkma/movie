import express from "express";
import {
  addMovie,
  editMovie,
  getAllMovie,
  getMovieById,
} from "./../controllers/movie";
const router = express.Router();

router.post("/", addMovie);

router.get("/", getAllMovie);

router.put("/:movieId", editMovie);

router.get("/:movieId", getMovieById);

export default router;
