import * as http from "http";
import * as fs from "fs";
import * as path from "path";

const hostname = "localhost";
const port = 3000;
const server = http.createServer((req, res) => {
  console.log("Request for", req.url, "by method", req.method);

  const { headers } = req;
  let textHeaders = "<ul>";
  for (const [key, value] of Object.entries(headers)) {
    textHeaders += `<li>${key}: ${value}</li>`;
  }
  textHeaders += "</ul>";
  const textHtml = `<html lang="es">
  <head>
      <meta charset="UTF-8">
      <title>Doxeado</title>
  </head>
  <body>
      <h1>¡Hola mundo!</h1>
      <hr/>
      <p>Has sido doxeado ☠️☠️</p>
      <hr/>
      ${textHeaders}
  </body>
  </html>`;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(textHtml);
});

server.listen(port, hostname, () =>
  console.log("Server running", `http://${hostname}:${port}`)
);
