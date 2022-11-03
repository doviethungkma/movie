import cryptojs from "crypto-js";
import { Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";
import User from "../models/user";
import { HTTP_STATUS } from "../utils/constant";

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
        role: newUser.role,
        status: newUser.status,
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

    //check user inactive
    if (user.status === "inactive") {
      return res.status(HTTP_STATUS.SUCCESS).json({
        status: "error",
        message: "Your account is inactive",
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
        status: user.status,
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

export const renewPackage = async (req: Request, res: Response) => {
  const { userId, packageId, packageMonth } = req.params;
  try {
    const currentDate = new Date();

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    const currentHour = currentDate.getUTCHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSecond = currentDate.getSeconds();

    const newEndDate = `${
      currentMonth + parseInt(packageMonth) > 12 ? currentYear + 1 : currentYear
    }-${
      currentMonth + parseInt(packageMonth) > 12
        ? (currentMonth + parseInt(packageMonth)) % 12 < 10
          ? "0" + ((currentMonth + parseInt(packageMonth)) % 12)
          : (currentMonth + parseInt(packageMonth)) % 12
        : currentMonth + parseInt(packageMonth)
    }-${currentDay < 10 ? "0" + currentDay : currentDay}T${
      currentHour < 10 ? "0" + currentHour : currentHour
    }:${currentMinutes < 10 ? "0" + currentMinutes : currentMinutes}:${
      currentSecond < 10 ? "0" + currentSecond : currentSecond
    }+00:00`;
    console.log(packageId);

    const response = await User.findOneAndUpdate(
      {
        _id: userId,
        "package._id": packageId,
      },
      {
        $set: {
          "package.$.startDate": currentDate,
          "package.$.endDate": newEndDate,
        },
      },
      {
        new: true,
      }
    );
    console.log(response);

    if (!response)
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json({ status: "error", message: "Package renewal failed" });

    res.status(HTTP_STATUS.SUCCESS).json({
      status: "success",
      newPackage: response.package,
    });
  } catch (error: any) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      msg: error.message,
    });
  }
};
