import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../../CustomError/CustomError";
import User from "../../database/models/User";
import type LoginBody from "./types";
import jwt from "jsonwebtoken";

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { password, username } = req.body as LoginBody;

  const user = await User.findOne({ password, username });

  if (!user) {
    const customError = new CustomError(
      "Something went wrong with your credentials",
      401,
      "Something went wrong with your credentials"
    );

    next(customError);
    return;
  }

  const jwtToken = {
    sub: user?._id,
  };

  const token = jwt.sign(jwtToken, process.env.JWT_SECRET!);

  res.status(200).json({ token });
};
