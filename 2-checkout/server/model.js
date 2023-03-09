const db = require('./db.js');
const Promise = require("bluebird");

module.exports.getAll = () => {
  var queryString = 'SELECT * FROM responses';
  return db.queryAsync(queryString);
}

module.exports.create = (data) => {
  var queryString = 'INSERT INTO responses (name, email, password) VALUES(?, ?, ?)';
  return db.queryAsync(queryString, [data.name, data.email, data.password]);
}