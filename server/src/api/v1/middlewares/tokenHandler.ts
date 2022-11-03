import jsonwebtoken, { Jwt, JwtPayload } from "jsonwebtoken";
import User from "../models/user";
import { HTTP_STATUS } from "../utils/constant";
import { Request, Response, NextFunction } from "express";

interface JwtPayloadSigned extends jsonwebtoken.JwtPayload {
  id: string;
}

export const tokenDecode = (req: Request) => {
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader) {
    const bearer: string = bearerHeader.split(" ")[1];
    try {
      const tokenDecoded = jsonwebtoken.verify(
        bearer,
        process.env.TOKEN_SECRET_KEY as string
      ) as JwtPayloadSigned;
      return tokenDecoded;
    } catch (error) {
      return false;
    }
  }
};

export const verifyToken = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const tokenDecoded = tokenDecode(req);
  console.log(tokenDecoded);
  if (tokenDecoded) {
    const user = await User.findById(tokenDecoded.id);
    if (!user)
      return res.status(HTTP_STATUS.UNAUTHENTICATED).json("Unauthenticated");
    req.user = user;
    next();
  } else {
    res.status(HTTP_STATUS.UNAUTHENTICATED).json("Unauthenticated");
  }
};
