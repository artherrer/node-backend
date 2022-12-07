const mysql = require("mysql");
const config = require("./config.json");
const connection = mysql.createConnection({
  host: "localhost",
  user: "rootOld",
  password: "",
  database: "uaq-admin",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to database");
  }
});

module.exports = connection;
