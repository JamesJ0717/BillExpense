const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");

const billRoute = require("./api/Bill");

// console output color coded for developing
app.use(morgan("dev"));

// allow the rest of the files to be able to read the body of requests
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// header control
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/Bill", billRoute);

app.use("/", (req, res, next) => {
  res.json({ message: "Get Out!" });
});
module.exports = { app };
