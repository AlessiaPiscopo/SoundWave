"use strict";

require("dotenv").config({ path: "../.env" });

const SpotifyWebApi = require("spotify-web-api-node");
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const spotifyApi = new SpotifyWebApi({
  clientId: client_id,
  clientSecret: client_secret,
});

const getCategories = (req, res) => {
  spotifyApi
    // get access token
    .clientCredentialsGrant()
    .then((result) => {
      console.log("Your access token is: " + result.body.access_token);
      console.log("The access token expires in " + result.body["expires_in"]);
      spotifyApi.setAccessToken(result.body["access_token"]);

      // get categories
      return spotifyApi.getCategories({
        country: "US",
        locale: "en_US",
      });
    })
    .then((data) => {
      res.status(200).json({
        status: 200,
        message: "Get Categories - Success",
        data: data.body.categories.items,
      });
      console.log(data.body.categories.items);
      return;
    })
    .catch((err) => {
      console.log("Something went wrong...");
      console.log(err);
    });
};

const getCategory = (req, res) => {
  spotifyApi
    // get access token
    .clientCredentialsGrant()
    .then((result) => {
      console.log("Your access token is: " + result.body.access_token);
      console.log("The access token expires in " + result.body["expires_in"]);
      spotifyApi.setAccessToken(result.body["access_token"]);

      // get category
      const categoryId = req.params.categoryId;
      return spotifyApi.getCategory(categoryId);
    })
    .then((data) => {
      res.status(200).json({
        status: 200,
        message: "Get Category - Success",
        data: data,
      });
      console.log(data.body);
      return;
    })
    .catch((err) => {
      console.log("Something went wrong...");
      console.log(err);
    });
};

module.exports = { getCategories, getCategory };
