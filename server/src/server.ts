import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import config from "./assets/config.json";
import { NodeEnvs } from "./constants/misc";
import { tasks } from "./routes";

const app: Express = express();

// Basic middleware
app.set("json spaces", 4);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle logs in console during development
if (process.env.NODE_ENV === NodeEnvs.Dev || config.NODE_ENV === NodeEnvs.Dev) {
  app.use(morgan("dev"));
  app.use(cors());
}

// Handle security and origin in production
if (
  process.env.NODE_ENV === NodeEnvs.Production ||
  config.NODE_ENV === NodeEnvs.Production
) {
  app.use(helmet());
}

app.use("/api/tasks", tasks)

export default app;
