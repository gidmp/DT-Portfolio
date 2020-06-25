const db = require("../models");

module.exports = function(app) {
    app.post("/api/contact", (req, res) => {
      console.log(req.body);
      db.Contact.create({
        name: req.body.name,
        email: req.body.email,
        comment: req.body.comment,
      })
        .then(data => {
          res.json(data);
        })
        .catch(err => {
          res.status(404).json(err);
        });
    });
  
    app.get("/api/contact", (req, res) => {
      db.Contact.findAll({})
        .then(data => {
          res.json(data);
        })
        .catch(err => {
          res.status(404).json(err);
        });
    });
};
  