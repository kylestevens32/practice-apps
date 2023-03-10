const db = require('./db.js');
const Promise = require("bluebird");

module.exports.getAll = () => {
  var queryString = 'SELECT * FROM responses';
  return db.queryAsync(queryString);
}

module.exports.create = (data) => {
  var queryString = 'INSERT INTO responses (name, email, password, addressOne, addressTwo, city, state, zipcode, cardnumber, expiryDate, cvv, billingZip) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  var params = [data.name, data.email, data.password, data.addressOne, data.addressTwo, data.city, data.state, data.zipcode, data.cardnumber, data.expiryDate, data.cvv, data.billingZip];
  return db.queryAsync(queryString, params);
}
