import "./loadEnvironment.js";
import connectDatabase from "./database/connectDatabase.js";
import { startServer } from "./server/server.js";

const port = process.env.PORT ?? 4000;
const mongoUrl = process.env.MONGODB_CONNECTION_URL;

await connectDatabase(mongoUrl!);
await startServer(+port);
