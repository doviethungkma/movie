import express from "express";
import mongoose from "mongoose";
import { Request, Response } from "express";
import Movie from "../models/movie";
import { HTTP_STATUS } from "../utils/constant";
import { IMovie } from "./../interfaces/movie";

export const addMovie = async (req: Request, res: Response) => {
  let movie: IMovie = req.body;
  try {
    const newMovie = await Movie.create(movie);
    console.log(newMovie);
    if (newMovie) {
      res.status(HTTP_STATUS.SUCCESS).json({
        status: "success",
        movie: newMovie,
      });
    } else {
      res.status(HTTP_STATUS.BAD_REQUEST).json({
        status: "failed",
        msg: "Create new movie failed",
      });
    }
  } catch (error: any) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      msg: error.message,
    });
  }
};

export const editMovie = async (req: Request, res: Response) => {
  const { movieId } = req.params;
  const data = req.body;
  try {
    const movieUpdated = await Movie.findByIdAndUpdate(
      movieId,
      {
        $set: data,
      },
      { new: true }
    );
    if (!movieUpdated)
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ status: "error", message: "Update movie failed" });

    res.status(HTTP_STATUS.SUCCESS).json({
      status: "success",
      movie: movieUpdated,
    });
  } catch (error: any) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      msg: error.message,
    });
  }
};

export const getAllMovie = async (req: Request, res: Response) => {
  try {
    const movies = await Movie.find();
    if (movies) {
      res.status(HTTP_STATUS.SUCCESS).json({
        status: "success",
        movies,
      });
    } else {
      res.status(HTTP_STATUS.BAD_REQUEST).json({
        status: "failed",
        msg: "Get all movies failed",
      });
    }
  } catch (error: any) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      msg: error.message,
    });
  }
};

export const getMovieById = async (req: Request, res: Response) => {
  const { movieId } = req.params;
  try {
    const movie = await Movie.findOne({ _id: movieId });
    if (movie) {
      res.status(HTTP_STATUS.SUCCESS).json({
        status: "success",
        movie,
      });
    } else {
      res.status(HTTP_STATUS.BAD_REQUEST).json({
        status: "failed",
        msg: "Get movie failed",
      });
    }
  } catch (error: any) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      msg: error.message,
    });
  }
};
