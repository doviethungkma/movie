import express from "express";
import { addMovie, getAllMovie, getMovieById } from "./../controllers/movie";
const router = express.Router();

router.post("/", addMovie);

router.get("/", getAllMovie);

router.get("/:movieId", getMovieById);

export default router;
