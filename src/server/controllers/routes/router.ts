import { Router } from "express";
import { getRobotsId } from "../robotsControllers";

// eslint-disable-next-line new-cap
const robotsRouter = Router();

robotsRouter.get("/", getRobotsId);
