"use strict";

const express = require("express");
const dotenv = require("dotenv").config();
// const PORT = process.env.PORT;
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
// const SpotifyWebApi = require("spotify-web-api-node");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());

// Routes
app.use("/api/categories/", require("./routes/categoriesRoutes"));



app.listen(8005, () => console.log(`🍉 Listening on Port ${8005}...`));

// get all artists (id1, id2, ... ) up to 50 max
// app.use("/api/artists", require("./routes/spotifyRoutes"));
