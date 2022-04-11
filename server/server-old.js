"use strict";

const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const SpotifyWebApi = require("spotify-web-api-node");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

// SPOTIFY TEST

app.post("/login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "8c06763554494aec9c95bbc12997589f",
    clientSecret: "907a56fd09a34f5aa29397e329fb09e0",
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

// ---------------------------------------------------------------

// Routes
app.use("/api/users", require("./routes/userRoutes"));

// ---------------------------------------------------------------

app.listen(PORT, () => console.log(`🍉 Listening on Port ${PORT}...`));
