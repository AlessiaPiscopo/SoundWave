"use strict";

require("dotenv").config({ path: "../.env" });
const axios = require("axios");

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const SpotifyWebApi = require("spotify-web-api-node");

const spotifyApi = new SpotifyWebApi({
  clientId: client_id,
  clientSecret: client_secret,
});

const getGenres = async (req, res) => {
  try {
    // fetch token
    const accessToken = await spotifyApi.clientCredentialsGrant();
    res.status(200).json({ status: 200, data: accessToken.body.access_token });

    // fetch GENRES (i.e. categories)
    // axios("https://api.spotify.com/v1/browse/categories", {
    //   method: "GET",
    //   headers: { Authorization: `Bearer ${accessToken.body.access_token}` },
    // }).then((genreResponse) => {
    //   res.status(200).json({
    //     status: 200,
    //     data: genreResponse,
    //   });
    // });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = { getGenres };
