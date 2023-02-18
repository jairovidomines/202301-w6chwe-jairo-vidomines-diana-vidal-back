import express from "express";
import { robotsRouter } from "./routers/router.js";

export const app = express();
// App.disable("x-powered-by");

app.use(express.json());
app.use("/robots", robotsRouter);
