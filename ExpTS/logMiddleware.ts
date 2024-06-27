require('dotenv').config();
const fs = require('fs');
const path = require('path');

const logMiddleware = (format) => (req, res, next) => {
  const logDirectory = process.env.LOG_DIR || 'logs';
  const logFilePath = path.join(__dirname, logDirectory, 'access.log');

  if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory, { recursive: true });
  }

  const now = new Date().toISOString();
  const { method, url, httpVersion, headers } = req;
  const userAgent = headers['user-agent'];

  let logMessage = `[${now}] ${method} ${url}`;

  if (format === 'completo') {
    logMessage += ` HTTP/${httpVersion} ${userAgent}`;
  }
  fs.appendFileSync(logFilePath, logMessage + '\n');
  next();
};

module.exports = logMiddleware;
