import chalk from "chalk";
import debug from "debug";
import { app } from "./index.js";

const debugRobot = debug("robots");

export const startServer = async (port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debugRobot(chalk.cyan(`Server listening on: http://localhost:${port}`));
      resolve(server);
    });

    server.on("error", (error: Error) => {
      debugRobot(chalk.red("Error to start server", error.message));
      reject(error);
    });
  });
