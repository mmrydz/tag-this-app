const router = require("express").Router();
const itemRoutes = require("./items");


// item routes
router.use("/items", itemRoutes);

module.exports = router;
