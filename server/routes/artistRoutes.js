"use strict";

const express = require("express");
const router = express.Router();

const {
  getArtistsById,
  getArtistById,
  getArtistAlbums,
} = require("../controllers/artistControllers");

router.route("/").get(getArtistsById);
router.route("/:artistId").get(getArtistById);
router.route("/:artistId/albums").get(getArtistAlbums);
// router.route("/:artistId/albums").get(getArtistAlbums);

module.exports = router;
