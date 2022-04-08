const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const PORT = 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());

app.use("/api/users", require("./routes/userRoutes"));

app.listen(PORT, () => console.log(`🍉 Listening on Port ${PORT}...`));
