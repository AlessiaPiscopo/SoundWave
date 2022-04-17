"use strict";

const express = require("express");
const router = express.Router();
const {
  getCategories,
  getCategory,
} = require("../controllers/categoriesControllers");
// const { getArtists } = require("../controllers/artistControllers");

router.route("/").get(getCategories);
router.route("/:categoryId").get(getCategory);

// router.route("/").get(getArtists);
// router.route("/:id").get(getOneArtist);

module.exports = router;
