"use strict";

const express = require("express");
const router = express.Router();

const {
  getArtistsById,
  getArtistById,
} = require("../controllers/artistControllers");

router.route("/").get(getArtistsById);
router.route("/:artistId").get(getArtistById);

module.exports = router;
