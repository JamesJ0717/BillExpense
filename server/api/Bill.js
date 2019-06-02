const express = require("express");
const DB = require("../db");
const db = new DB("sqlite3");

const router = express.Router();

router.post("/", (req, res) => {
  console.log("POST to addBill");
  console.log(req.body);
  db.addBill([req.body.title, req.body.amount, req.body.due], err => {
    if (err) {
      console.log(err);
      return res
        .json({
          error: err,
          message: "Internal Server Error",
          status: 500
        })
        .status(500);
    }
    return res
      .json({
        created: true,
        bill: bill,
        status: 200
      })
      .status(200);
  });
});

router.get("/", (req, res) => {
  console.log("GET to bill");
});

module.exports = router;
