import * as http from "http";
import * as fs from "fs";
import * as path from "path";

const hostname = "localhost";
const port = 3000;
const server = http.createServer(({ url, method }, res) => {
  console.log("Request for", url, "by method", method);

  let filePath: string;
  if (method === "GET") {
    if (url === "/") {
      filePath = path.resolve("./public/index.html");
      if (!fs.existsSync(filePath)) return res.end("404 Not Found");
    } else {
      filePath = path.resolve(`./public${url}.html`);
      if (!fs.existsSync(filePath)) {
        res.statusCode = 404;
        res.statusMessage = "Not found";
        res.setHeader("Content-Type", "text/html");
        return res.end(`<h1>File ${url} not found!</h1>`);
      }
    }
    fs.createReadStream(filePath).pipe(res);
  }
});

server.listen(port, hostname, () =>
  console.log("Server running", `http://${hostname}:${port}`)
);
