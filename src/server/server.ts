import chalk from "chalk";
import debug from "debug";
import type CustomError from "../CustomError/CustomError.js";
import { app } from "./index.js";

const debugRobot = debug("robots");

export const startServer = async (port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      resolve(server);
    });

    server.on("error", (error: CustomError) => {
      if (error.code === "EADDRINUSE") {
        debug(chalk.red("Error to start server", error.message));
      }

      reject(new Error("Error to start the server"));
    });
  });
