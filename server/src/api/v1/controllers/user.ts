import express from "express";
import mongoose from "mongoose";
import { Request, Response } from "express";
import cryptojs from "crypto-js";
import User from "../models/user";
import jsonwebtoken from "jsonwebtoken";
import { HTTP_STATUS } from "../utils/constant";
import { body } from "express-validator";

export const register = async (req: Request, res: Response) => {
  let { username, password, email } = req.body;

  try {
    const encryptedPassword = cryptojs.AES.encrypt(
      password,
      process.env.PASSWORD_SECRET_KEY as string
    );
    const newUser = await User.create({
      username,
      password: encryptedPassword.toString(),
      email,
    });
    const token = jsonwebtoken.sign(
      {
        id: newUser._id,
      },
      process.env.TOKEN_SECRET_KEY as string,
      {
        expiresIn: "24h",
      }
    );
    res.status(HTTP_STATUS.SUCCESS).json({
      status: "success",
      user: {
        id: newUser._id,
        username: newUser.username,
      },
      token,
    });
  } catch (error: any) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      msg: error.message,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username }).select(
      "username password role status"
    );

    //check user exist
    if (!user) {
      return res.status(HTTP_STATUS.SUCCESS).json({
        status: "error",
        message: "Invalid username or password",
      });
    }

    //check user inactive
    if (user.status === "inactive") {
      return res.status(HTTP_STATUS.SUCCESS).json({
        status: "error",
        message: "Your account is inactive",
      });
    }

    const decryptedPassword = cryptojs.AES.decrypt(
      user.password as string,
      process.env.PASSWORD_SECRET_KEY as string
    ).toString(cryptojs.enc.Utf8);

    if (decryptedPassword !== password) {
      return res.status(HTTP_STATUS.SUCCESS).json({
        status: "error",
        message: "Invalid username or password",
      });
    }

    const token = jsonwebtoken.sign(
      { id: user._id },
      process.env.TOKEN_SECRET_KEY as string,
      {
        expiresIn: "24h",
      }
    );

    res.status(HTTP_STATUS.SUCCESS).json({
      status: "success",
      user: {
        id: user._id,
        username: user.username,
        role: user.role,
      },
      token: token,
    });
  } catch (error: any) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      error: error.message,
    });
  }
};

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    if (users) {
      res.status(HTTP_STATUS.SUCCESS).json({
        status: "success",
        users,
      });
    } else {
      res.status(HTTP_STATUS.BAD_REQUEST).json({
        status: "failed",
        msg: "Get all users failed",
      });
    }
  } catch (error: any) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      error: error.message,
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const data = req.body;
  try {
    const userUpdated = await User.findByIdAndUpdate(
      userId,
      {
        $set: data,
      },
      {
        new: true,
      }
    );
    if (!userUpdated)
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ status: "error", message: "Update user failed" });

    res.status(HTTP_STATUS.SUCCESS).json({
      status: "success",
      user: userUpdated,
    });
  } catch (error: any) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      msg: error.message,
    });
  }
};
