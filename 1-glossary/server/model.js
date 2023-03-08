const glossary = require('./db.js');

module.exports.getAll = (cb) => {
  glossary.find({})
    .then((data) => {
      cb(null, data);
    })
    .catch((err) => {
      cb(err);
    })
}

module.exports.create = () => {

}