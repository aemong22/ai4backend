const http = require("http");
const fs = require("fs");

const arr = [1, 2, 3];

function onRequest(req, res) {
  console.log(req.method, req.url);
  if (req.method === "GET") {
    if (req.url === "/test") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write(JSON.stringify(arr));
      res.end();
    } else if (req.url === "/") {
      fs.readFile("./index.html", "utf-8", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("404 Error");
      res.end();
    }
  } else if (req.method === "POST") {
    if (req.url === "/test") {
      res.writeHead(200, { "Content-Type": "application/json" });
      arr.push("new Data");
      res.write(JSON.stringify(arr));
      res.end();
    }
  } else if (req.method === "PUT") {
    arr.push("new Data");

    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        status: "succ",
      })
    );
    res.end();
  } else if (req.method === "DELETE") {
    arr.pop();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        status: "succ",
      })
    );
    res.end();
  }
}

http.createServer(onRequest).listen(3000);