"use strict";
const sqlite3 = require("sqlite3").verbose();

class Db {
  constructor(file) {
    this.db = new sqlite3.Database(file);
    this.createTable();
  }

  createTable() {
    const sql = `
        CREATE TABLE IF NOT EXISTS bills (
            id integer PRIMARY KEY,
            title text,
            amount money,
            due date,
            repeat boolean,
            dueNumber number
        )`;
    return this.db.run(sql);
  }

  addBill(bill, callback) {
    return (
      this.db.run("INSERT INTO bills (title, amount, due, repeat, dueNumber) VALUES (?, ?, ?, ?, ?)",
        bill,
        (err) => {
          callback(err);
        }
      ));
  }

  getBills(callback) {
    return (
      this.db.all("SELECT * FROM bills",
        (err, rows) => {
          callback(err, rows);
        }
      ));
  }
}

module.exports = Db;