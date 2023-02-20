import Router from "express";
import { getRobots, getRobotById } from "../controllers/robotsControllers.js";
import { loginUser } from "../controllers/userControllers.js";

// eslint-disable-next-line new-cap
export const robotsRouter = Router();
// eslint-disable-next-line new-cap
export const usersRouter = Router();

robotsRouter.get("/", getRobots);
robotsRouter.get("/:idRobot", getRobotById);

usersRouter.get("/", loginUser);
