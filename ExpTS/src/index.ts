import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import router from "./router/router";
import { engine } from "express-handlebars";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3333;
const logFolder = process.env.LOG_FOLDER || "logs";
const logFormat = process.env.LOG_FORMAT;
require("dotenv").config();

app.engine(
  "handlebars",
  engine({
    helpers: require(`${__dirname}/views/helpers/helpers.ts`),
  })
);

app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

app.use((req: Request, res: Response, next) => {
  const now = new Date().toISOString();
  const logFilePath = path.join(logFolder, "access.log");

  let logMessage;

  if (logFormat === "completo") {
    logMessage = `${now} ${req.method} ${req.url} HTTP/${req.httpVersion} ${req.headers["user-agent"]}\n`;
  } else {
    logMessage = `${now} ${req.method} ${req.url}\n`;
  }

  fs.appendFileSync(logFilePath, logMessage, "utf8");

  next();
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});
