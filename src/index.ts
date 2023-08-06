import * as http from "http";

const hostname = "localhost";
const port = 3000;
const server = http.createServer((req, res) => {
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
  console.log("running server on app", `http://${hostname}:${port}`)
);
