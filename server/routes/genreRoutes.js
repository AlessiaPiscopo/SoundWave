"use strict";

const express = require("express");
const router = express.Router();
const {
  getGenres,
  // getSpotifyAuth,
} = require("../controllers/genreControllers");
// const { getArtists } = require("../controllers/artistControllers");

router.route("/").get(getGenres);

// router.route("/").get(getArtists);
// router.route("/:id").get(getOneArtist);

module.exports = router;
