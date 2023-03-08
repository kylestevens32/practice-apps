const model = require('./model.js');

module.exports.get = (req, res) => {
  model.getAll((err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.status(200).send(data);
    }
  })
}

