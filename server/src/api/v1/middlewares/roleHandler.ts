import jsonwebtoken from "jsonwebtoken";
import { ROLE } from "../utils/constant";
import { NextFunction, Response } from "express";
import { tokenDecode } from "./tokenHandler";
import User from "../models/user";
import { HTTP_STATUS } from "./../utils/constant";

const listValidRole = [ROLE.ADMIN, ROLE.MOD, ROLE.USER];

export const checkRole = (acceptRole: Array<string>) => {
  return async (req: any, res: Response, next: NextFunction) => {
    try {
      const tokenDecoded = tokenDecode(req);
      if (tokenDecoded) {
        const user = await User.findById(tokenDecoded.id);
        if (!user)
          return res
            .status(HTTP_STATUS.UNAUTHENTICATED)
            .json("Unauthenticated");
        if (acceptRole.includes(user.role)) {
          next();
          return;
        } else {
          return res
            .status(HTTP_STATUS.UNAUTHORIZED)
            .json("You cant access this resource");
        }
      }
    } catch (error) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json("Unauthorized");
    }
  };
};

export const isValidRole = (role: string) => {
  return listValidRole.includes(role);
};
