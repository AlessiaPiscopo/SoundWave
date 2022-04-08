const express = require("express");

// allows us to have a .env file for our environment variables
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8000;

const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());

app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => console.log(`🍉 Listening on Port ${port}...`));
