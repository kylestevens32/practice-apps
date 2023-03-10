const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS responses (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL,
        addressOne TEXT NOT NULL,
        addressTwo TEXT NOT NULL,
        city TEXT NOT NULL,
        state VARCHAR(2) NOT NULL,
        zipcode VARCHAR(5) NOT NULL,
        cardnumber VARCHAR(16) NOT NULL,
        expiryDate VARCHAR(5) NOT NULL,
        cvv VARCHAR(3) NOT NULL,
        billingZip VARCHAR(5) NOT NULL
      )`
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
