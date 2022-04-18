"use strict";

require("dotenv").config({ path: "../.env" });

const SpotifyWebApi = require("spotify-web-api-node");
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const spotifyApi = new SpotifyWebApi({
  clientId: client_id,
  clientSecret: client_secret,
});

// TODO: rename to searchArtistsByGenre, move to artist controllers
const searchByGenre = (req, res) => {
  spotifyApi
    // get access token
    .clientCredentialsGrant()
    .then((result) => {
      console.log("Your access token is: " + result.body.access_token);
      console.log("The access token expires in " + result.body["expires_in"]);
      spotifyApi.setAccessToken(result.body["access_token"]);

      // SEARCH ARTISTS BY GENRE
      return spotifyApi.searchArtists(`genre:${req.params.genre}`);
      // return spotifyApi.
    })
    .then((data) => {
      res.status(200).json({
        status: 200,
        message: "Search by Genre - Success",
        data: data,
      });
      console.log(data.body);
      return;
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
      console.log("Something went wrong...");
      console.log(err);
    });
};

module.exports = { searchByGenre };
