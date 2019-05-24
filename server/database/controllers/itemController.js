const db = require("../models");

// Defining methods for the ItemController
module.exports = {
  findAll: function(req, res) {
    db.Item.find(req.query)
      .then(dbItem => res.json(dbItem))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log("findById itemController", req.params.id);
    db.Item.findOne({barcode: req.params.id})
      .then(dbItem => {
        res.json(dbItem)
      })
      .catch(err => res.status(422).json(err));
  },
  findByCategory: function(req, res) {
    db.Item.findByCategory(req.params.category)
      .then(dbItem => res.json(dbItem))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    db.Item.create(req.body)
      .then(dbItem => res.json(dbItem))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("This is the request at itemController 30", req.body);
    db.Item.findOneAndUpdate({ barcode: req.params.id }, req.body)
      .then(dbItem => res.json(dbItem))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Item.findById(req.params.id)
      .then(dbItem => dbItem.remove())
      .then(dbItem => res.json(dbItem))
      .catch(err => res.status(422).json(err));
  }
};