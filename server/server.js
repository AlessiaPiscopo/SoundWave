"use strict";

const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const spotifyWebApi = require("spotify-web-api-node");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());

// Routes 
app.use("/api/users", require("./routes/userRoutes"));

app.listen(PORT, () => console.log(`🍉 Listening on Port ${PORT}...`));
