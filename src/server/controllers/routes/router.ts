import { Router } from "express";
import { getRobotsId } from "../robotsControllers";

// eslint-disable-next-line new-cap
export const robotsRouter = Router();

robotsRouter.get("/", getRobotsId);
