import Robot from "../../database/models/Robots.js";
import { type Request, type Response, type NextFunction } from "express";
import CustomError from "../../CustomError/CustomError.js";

export const getRobots = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const robots = await Robot.find();

    res.status(200).json({ robots });
  } catch (error) {
    const customError = new CustomError(
      "Something went wrong",
      500,
      "Database error"
    );
    next(customError);
  }
};

export const getRobotById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const robot = await Robot.findById(id);
  if (!Robot) {
    res.status(404).json({ error: "Robot not found" });
    return;
  }

  res.status(200).json({ getRobotId: robot });
};
