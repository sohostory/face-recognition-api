const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("<h1>Hello</h1>");
  next();
});

app.get("/", (req, res) => {
  res.send("helloo");
});

app.listen(3000);
