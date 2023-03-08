const Glossary = require('./db.js');

module.exports.getAll = (cb) => {
  Glossary.find({})
    .then((data) => {
      cb(null, data);
    })
    .catch((err) => {
      cb(err);
    })
}

module.exports.create = (word, cb) => {
  var newDoc = new Glossary(word);
  newDoc.save()
    .then(() => {
      cb(null);
    })
    .catch((err) => {
      console.log('Error with saving document', err);
      cb(err);
    })
}

module.exports.delete = (wordId, cb) => {
  Glossary.deleteOne({ _id: wordId})
    .then(() => {
      cb(null);
    })
    .catch((err) => {
      cb(err);
    })
}