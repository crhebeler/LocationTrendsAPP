const db = require("../models");

// Defining methods for the FloridaSchoolGradeController
module.exports = {
     findOne: function(req,res) {
        db.FloridaSchoolGrade
          .find(req.query)
          .sort({data: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err)); //422 Unprocessable Enttity (WebDAV)
    },
  findAll: function(req, res) {
    db.FloridaSchoolGrade
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); //422 Unprocessable Entity (WebDAV)
  },
  findById: function(req, res) {
    db.FloridaSchoolGrade
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); //422 Unprocessable Entity (WebDAV)
  },
  create: function(req, res) {
    db.FloridaSchoolGrade
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); //422 Unprocessable Entity (WebDAV)
  },
  update: function(req, res) {
    db.FloridaSchoolGrade
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); //422 Unprocessable Entity (WebDAV)
  },
  remove: function(req, res) {
    db.FloridaSchoolGrade
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); //422 Unprocessable Entity (WebDAV)
  }
};