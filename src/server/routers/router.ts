import Router from "express";
import { getRobots, getRobotsId } from "../controllers/robotsControllers.js";

// eslint-disable-next-line new-cap
export const robotsRouter = Router();

robotsRouter.get("/", getRobots);
robotsRouter.get("/:idRobot", getRobotsId);
