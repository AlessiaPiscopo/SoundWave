"use strict";

const express = require("express");
const router = express.Router();

const { getArtists, getArtist } = require("../controllers/artistControllers");

router.route("/").get(getArtists);
router.route("/:artistId").get(getArtist);

module.exports = router;
