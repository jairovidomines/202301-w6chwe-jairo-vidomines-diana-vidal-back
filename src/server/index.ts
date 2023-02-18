import express from "express";
import { robotsRouter } from "./controllers/routes/router";

export const app = express();
app.disable("x-powered-by");

app.use(express.json());
app.use("/robots", robotsRouter);
