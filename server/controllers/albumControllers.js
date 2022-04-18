"use strict";

require("dotenv").config({ path: "../.env" });

const SpotifyWebApi = require("spotify-web-api-node");
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const spotifyApi = new SpotifyWebApi({
  clientId: client_id,
  clientSecret: client_secret,
});

const getAlbumDetails = (req, res) => {
  spotifyApi
    // get access token
    .clientCredentialsGrant()
    .then((result) => {
      console.log("Your access token is: " + result.body.access_token);
      console.log("The access token expires in " + result.body["expires_in"]);
      spotifyApi.setAccessToken(result.body["access_token"]);

      return spotifyApi
        .getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE", { limit: 10 })
        .then((data) => {
          console.log(data);
          return data.body.items.map((album) => {
            return album.id;
          });
        })
        .then((albums) => {
          return spotifyApi.getAlbums(albums);
        })
        .then(function (data) {
          res.status(200).json({
            status: 200,
            message: "Get Category - Success",
            data: data,
          });

          console.log(data.body);
        });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
      console.log("Something went wrong...");
      console.log(err);
    });
};

module.exports = { getAlbumDetails };
