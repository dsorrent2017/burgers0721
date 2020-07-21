// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
var connection = require("../config/connection");
var dbtable = connection.database ==  "cat_db" ? dbtable : "burgers";
var cat = {
  all: function(cb) {
    console.log("cat.js all = "+ dbtable)
    orm.all(dbtable, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create(dbtable, cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update(dbtable, objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete(dbtable, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = cat;
