const model = require('./model.js');

module.exports.get = (req, res) => {
  model.getAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.sendStatus(404);
    })
}

module.exports.post = (req, res) => {
  var data = req.body;
  model.create(data)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(404);
    })
}

module.exports.put = (req, res) => {
  model.update(req.body)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(404);
    })
}

module.exports.delete = (req, res) => {
  var deleteId = req.body.id;
  model.delete(deleteId)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(404);
    })
}

