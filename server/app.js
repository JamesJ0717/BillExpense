const express = require("express");
const app = express();

app.use("/hi", (req, res, next) => {
  res.json({ message: "Hello" });
});
app.use("/", (req, res, next) => {
  res.json({ message: "Get Out!" });
});
module.exports = { app };
