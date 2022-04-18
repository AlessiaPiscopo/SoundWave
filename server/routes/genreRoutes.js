"use strict";

const express = require("express");
const router = express.Router();

const {
  getCategories,
  getCategory,
} = require("../controllers/genreControllers");

router.route("/").get(getCategories);

module.exports = router;
