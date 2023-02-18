import { Router } from "express";
import { getRobotsId } from "../robotsControllers.js";

// eslint-disable-next-line new-cap
export const robotsRouter = Router();

robotsRouter.get("/:id", getRobotsId);
