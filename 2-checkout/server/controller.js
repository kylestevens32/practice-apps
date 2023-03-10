const model = require('./model.js');

module.exports.get = (req, res) => {
  model.getAll()
    .then((results) => {
      console.log(results)
      res.status(200).send(results[0]);
    })
    .catch((err) => {
      res.sendStatus(404);
    })
}

module.exports.post = (req, res) => {
  model.create(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    })

}