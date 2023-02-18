import { type Request, type Response } from "express";
import Robot from "../../database/models/Robot.js";

export const getRobotsId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const getRobotId = await Robot.findById(id);
  if (!Robot) {
    res.status(404).json({ error: "Robot not found" });
  }

  res.status(201).json({ Robot });
};
