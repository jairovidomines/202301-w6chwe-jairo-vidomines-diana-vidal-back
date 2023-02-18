import Robot from "../../database/models/Robot.js";
import { type Request, type Response, type NextFunction } from "express";
import CustomError from "../../CustomError/CustomError.js";

export const getRobotsId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const getRobotId = await Robot.findById(id);
  if (!Robot) {
    res.status(404).json({ error: "Robot not found" });
  }

  res.status(201).json({ Robot });
};

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
