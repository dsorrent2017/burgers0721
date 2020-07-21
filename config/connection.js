// Set up MySQL connection.
var mysql = require("mysql");
// process.argv.length == 2 ? "cat_db" : "burger_db"
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "99Spooky",
  database: "burger_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
