const fs = require("fs");
const express = require("express");
const app = express();

const arr = [];

app.get("/", (req, res) => {
  fs.readFile("./index.html", "utf-8", (err, data) => {
    res.send(data);
  });
});

app.get("/arr", (req, res) => {
  res.send({
    arr: arr,
  });
});

app.post("/arr", (req, res) => {
  arr.push("new Data");
  res.send({
    status: "succ",
  });
});

app.put("/arr", (req, res) => {
  arr[0] = "Update";
  res.send({
    status: "succ",
  });
});

app.delete("/arr", (req, res) => {
  arr.pop();
  res.send({
    status: "succ",
  });
});

app.listen(3000, () => console.log("서버 켜짐 3000 포트"));