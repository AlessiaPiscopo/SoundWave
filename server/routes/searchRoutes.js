"use strict";

const express = require("express");
const router = express.Router();

const { searchByGenre } = require("../controllers/searchControllers");

router.route("/:genre").get(searchByGenre);

module.exports = router;

// "new-release" in genre seeds 