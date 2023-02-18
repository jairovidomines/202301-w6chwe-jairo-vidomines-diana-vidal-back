import { type Request, type Response, type NextFunction } from "express";
import CustomError from "../../CustomError/CustomError.js";
import Robot from "../../database/models/Robots.js";

export const getRobots = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const robots = await Robot.find();

    res.status(201).json({ robots });
  } catch (error) {
    const customError = new CustomError(
      "Something went wrong",
      500,
      "Database error"
    );
    next(customError);
  }
};
