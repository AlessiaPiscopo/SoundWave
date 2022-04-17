"use strict";
require("dotenv").config({ path: "../.env" });
const SpotifyWebApi = require("spotify-web-api-node");

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const spotifyApi = new SpotifyWebApi({
  clientId: client_id,
  clientSecret: client_secret,
});

// const getArtistTopTracks = (req, res) => {
//   // Retrieve an access token using your credentials
//   spotifyApi
//     .clientCredentialsGrant()
//     .then((result) => {
//       console.log(
//         "It worked! Your access token is: " + result.body.access_token
//       );
//       // Save the access token so that it's used in future calls
//       spotifyApi.setAccessToken(result.body["access_token"]);
//       return spotifyApi.getArtistTopTracks("0oSGxfWSnnOXhD2fKuz2Gy", "GB");
//     })
//     .then((data) => {
//       res.status(200).json({
//         status: 200,
//         message: "Success",
//         data: data,
//       });
//       return;
//     })
//     .catch((err) => {
//       console.log("Something went wrong when retrieving your access token");
//       console.log(err);
//     });
// };

// const getArtist = (req, res) => {
//   spotifyApi
//     .clientCredentialsGrant()
//     .then((result) => {
//       console.log(
//         "It worked! Your access token is: " + result.body.access_token
//       );
//       console.log("The access token expires in " + result.body["expires_in"]);
//       spotifyApi.setAccessToken(result.body["access_token"]);

//       return spotifyApi.getArtist("1u7kkVrr14iBvrpYnZILJR");
//     })
//     .then((data) => {
//       res.status(200).json({
//         status: 200,
//         message: "Success",
//         data: data,
//       });
//       return;
//     })
//     .catch((err) => {
//       console.log("Something went wrong when retrieving an access token");
//       console.log(err);
//     });
// };

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
        locale: "sv_US",
      });
    })
    .then((data) => {
      res.status(200).json({
        status: 200,
        message: "Get categories - success",
        data: data,
      });
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
        message: "Success - got categories",
        data: data,
      });
      console.log(data);
      return;
    })
    .catch((err) => {
      console.log("Something went wrong...");
      console.log(err);
    });
};

module.exports = { getCategories, getCategory };
