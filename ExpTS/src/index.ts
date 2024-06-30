import express, { Request, Response } from "express";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import router from "./router/router";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3333;
const logFolder = process.env.LOG_FOLDER || "logs";
const logFormat = process.env.LOG_FORMAT;

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

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello world!");
// });
app.use(router);

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});
