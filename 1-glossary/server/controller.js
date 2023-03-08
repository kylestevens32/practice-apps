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

module.exports.post = (req, res) => {
  var data = req.body;
  model.create(data, (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.sendStatus(201);
    }
  })
}

module.exports.delete = (req, res) => {
  console.log(req.body.id);
  var deleteId = req.body.id;
  model.delete(deleteId, (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  })
}

