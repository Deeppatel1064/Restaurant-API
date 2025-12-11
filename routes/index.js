const express = require("express");
const router = express.Router();
const restaurantController = require("../controller/restaurantController");

router.get("/search/dishes", restaurantController.searchDish);

module.exports = router;
