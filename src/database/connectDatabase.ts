import mongoose from "mongoose";
import debugCreator from "debug";
import chalk from "chalk";

const debug = debugCreator("robots: database");

const connectDatabase = async (mongoUrl: string) => {
  try {
    await mongoose.connect(mongoUrl);
    debug(chalk.green("Succesful connection"));
  } catch (error: unknown) {
    debug(
      chalk.red("Impossible to connect to database", (error as Error).message)
    );
  }
};

export default connectDatabase;
