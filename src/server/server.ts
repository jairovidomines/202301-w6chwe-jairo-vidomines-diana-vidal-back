import chalk from "chalk";
import express from "express";
import debug from "debug";

const app = express();
app.disable("x-powered-by");

const port = process.env.PORT ?? 4001;

export const startServer = async (port: number) => {
  await new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.cyan(`Server listenint on: http://localhost:${port}`));
      resolve(server);
    });

    server.on("error", (error: Error) => {
      debug(chalk.red("Error to start server", error.message));
      reject(error);
    });
  });
};
