const express = require("express");
const DB = require("../db");
const db = new DB("sqlite3");

const router = express.Router();

router.post("/", (req, res) => {
  console.log("POST to addBill");
  req.body.due = new Date(req.body.due).toLocaleDateString();
  var dateNumber = new Date(req.body.due).valueOf();
  if (req.body.repeat == true) {
    var nextMonth = req.body.due;
    var response = null;
    for (let i = 1; i < 13; i++) {
      db.addBill([req.body.title, req.body.amount, req.body.due, req.body.repeat, dateNumber], err => {
        if (err) {
          console.log(err);
          response = res.json({
              error: err,
              message: "Internal Server Error",
              status: 500
            })
            .status(500);
        }
      });
      var nextMonth = new Date(nextMonth);
      req.body.due = new Date(nextMonth.setMonth(nextMonth.getMonth() + 1)).toLocaleDateString();
      dateNumber = new Date(nextMonth).valueOf();
      console.log(nextMonth.getMonth(), '    ', dateNumber, '    ', req.body.due)
    }
    if (response) {
      return response
    }
    return res
      .json({
        created: true,
        status: 200
      })
      .status(200);
  } else {
    db.addBill([req.body.title, req.body.amount, req.body.due, req.body.repeat, dateNumber], err => {
      if (err) {
        console.log(err);
        return res
          .json({
            error: err,
            message: "Internal Server Error",
            status: 500
          })
          .status(500);
      } else {
        return res
          .json({
            created: true,
            status: 200
          })
          .status(200);
      }
    });
  }
});

router.get("/get", (req, res) => {
  console.log("GET to bill");
  db.getBills((err, rows) => {
    if (err) {
      console.log(err);
      return res.json({
        error: err,
        message: "Internal Server Error",
        status: 500
      }).status(500);
    }
    if (rows.length == 0) {
      return res.json({
        message: "You have no bills.",
        status: 404
      }).status(404)
    } else {
      return res.json({
        bills: rows
      }).status(200);
    }
  });
});

module.exports = router;