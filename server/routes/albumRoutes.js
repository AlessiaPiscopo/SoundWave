"use strict";

const express = require("express");
const router = express.Router();

const { getAlbumDetails } = require("../controllers/albumControllers");

// router.route("/").get(getArtists);
router.route("/album-details").get(getAlbumDetails);

module.exports = router;
