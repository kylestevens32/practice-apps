const Glossary = require('./db.js');

module.exports.getAll = () => {
  return Glossary.find({})
}

module.exports.create = (word) => {
  return Glossary.create(word);
}

module.exports.update = (word) => {
  var query = { _id: word._id};
  return Glossary.findOneAndUpdate(query, { name: word.name, definition: word.definition});
}

module.exports.delete = (wordId) => {
  return Glossary.deleteOne({ _id: wordId});
}