"use strict";

const express = require("express");
const router = express.Router();

const {
  getCategories,
  getCategory,
} = require("../controllers/categoryControllers");

router.route("/").get(getCategories);
router.route("/:categoryId").get(getCategory);

module.exports = router;
