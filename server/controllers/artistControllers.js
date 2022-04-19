"use strict";

require("dotenv").config({ path: "../.env" });

const SpotifyWebApi = require("spotify-web-api-node");
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const spotifyApi = new SpotifyWebApi({
  clientId: client_id,
  clientSecret: client_secret,
});

spotifyApi.searchArtists;
// Some test artist Ids:
//  - Alvvays: 3kzwYV3OCB010YfXMF0Avt
//  - TOPS: 2SdK1QDmZIP2hk94rSaLl9

// get single artist by id
const getArtistById = (req, res) => {
  spotifyApi
    // get access token
    .clientCredentialsGrant()
    .then((result) => {
      console.log("Your access token is: " + result.body.access_token);
      console.log("The access token expires in " + result.body["expires_in"]);
      spotifyApi.setAccessToken(result.body["access_token"]);

      // get artist
      const artistId = req.params.artistId;
      return spotifyApi.getArtist(artistId);
    })
    .then((data) => {
      res.status(200).json({
        status: 200,
        message: "Get Artist - Success",
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

// get multiple artists by id
const getArtistsById = (req, res) => {
  spotifyApi
    // get access token
    .clientCredentialsGrant()
    .then((result) => {
      console.log("Your access token is: " + result.body.access_token);
      console.log("The access token expires in " + result.body["expires_in"]);
      spotifyApi.setAccessToken(result.body["access_token"]);

      // get artists
      return spotifyApi.getArtists([
        "3kzwYV3OCB010YfXMF0Avt",
        "2SdK1QDmZIP2hk94rSaLl9",
      ]);
    })
    .then((data) => {
      res.status(200).json({
        status: 200,
        message: "Get Artists - Success",
        data: data,
      });
      console.log(data);
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

// get an artist's albums
const getArtistAlbums = (req, res) => {
  
}

module.exports = { getArtistsById, getArtistById };
