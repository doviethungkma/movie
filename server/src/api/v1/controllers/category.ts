import express from "express";
import mongoose from "mongoose";
import { Request, Response } from "express";
import { HTTP_STATUS } from "../utils/constant";
import Category from "../models/category";

export const addCategory = async (req: Request, res: Response) => {
  let { name } = req.body;
  try {
    const newCategory = await Category.create({
      name,
    });
    if (newCategory) {
      res.status(HTTP_STATUS.SUCCESS).json({
        status: "success",
        category: newCategory,
      });
    } else {
      res.status(HTTP_STATUS.BAD_REQUEST).json({
        status: "failed",
        msg: "Create new category failed",
      });
    }
  } catch (error: any) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      msg: error.message,
    });
  }
};
