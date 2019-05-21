// const express = require('express')
// const router = express.Router()
const router = require("express").Router();
const itemController = require("../../database/controllers/itemController");

// Matches with "/items"
router.route("/")
  .get(itemController.findAll)
  .post(itemController.create);

// Matches with "/items/:id"
router
  .route("/:id")
  .get(itemController.findById)
  .put(itemController.update)
  .delete(itemController.remove);

module.exports = router;