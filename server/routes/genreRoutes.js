"use strict";

const express = require("express");
const router = express.Router();

const {
  getCategories,
  getCategory,
  searchByGenre,
} = require("../controllers/genreControllers");

router.route("/").get(getCategories);
router.route("/:genre").get(searchByGenre);

module.exports = router;
