import express from "express";
import cors from "cors";
import { robotsRouter, usersRouter } from "./routers/router.js";

export const app = express();
app.use(cors());
app.use(express.json());

app.use("/robots", robotsRouter);
app.use("/users", usersRouter);
