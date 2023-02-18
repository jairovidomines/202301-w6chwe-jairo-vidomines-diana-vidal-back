import mongoose from "mongoose";
import chalk from "chalk";
import debug from "debug";

const debugRobot = debug("robots: database");

const connectDatabase = async (mongoUrl: string) => {
  mongoose.set("strictQuery", false);
  try {
    await mongoose.connect(mongoUrl);
    debugRobot(chalk.green("Succesful connection"));
  } catch (error: unknown) {
    debugRobot(
      chalk.red("Impossible to connect to database", (error as Error).message)
    );
  }
};

export default connectDatabase;
