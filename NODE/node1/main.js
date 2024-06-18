const http = require("http");
const fs = require("fs");
const path = require("path");
const { createlinks } = require("./utils/createLinks");

const dotenv = require("dotenv");
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
require("dotenv").config();

const PORT = process.env.PORT || 3333;

const server = http.createServer(function (req, res) {
  const directory = process.argv[2];

  if (req.url === "/") {
    fs.readdir(directory, function (err, files) {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html;charset=utf-8" });
        res.end("Erro ao listar arquivos.");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      files.forEach((file) => {
        res.write(createlinks(file));
      });
      res.end();
    });
  } else {
    const filePath = path.join(directory, req.url);
    fs.readFile(filePath, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
        res.end("Arquivo não encontrado.");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      res.write(data);

      res.write('<br><a href="/">Voltar</a>');
      res.end();
    });
  }
});

server.listen(PORT);
