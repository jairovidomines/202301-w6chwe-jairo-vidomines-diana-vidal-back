import { type Request, type Response } from "express";
import Robot from "../../database/models/Robots.js";

export const getRobots = (req: Request, res: Response) => {
  res.status(201).json({ Robot });
};
