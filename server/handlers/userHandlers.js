"use strict";

const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "../.env" });
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);
const db = client.db("FinalProject");

// @desc Get users
// @route GET /api/users
const getUsers = async (req, res) => {
  try {
    await client.connect();
    console.log("Connected to database");

    res.status(200).json({ status: 200, message: "Get users ✅" });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      status: 500,
      message: "Error 500 - Internal Server Error",
    });
  } finally {
    client.close();
    console.log("Disconnected from database");
  }
};

// @desc Create new user
// @route POST /api/users
const createUser = async (req, res) => {
  try {
    await client.connect();
    console.log("Connected to database");
    res.status(200).json({ status: 200, message: "Create user ✅" });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      status: 500,
      message: "Error 500 - Internal Server Error",
    });
  } finally {
    client.close();
    console.log("Disconnected from database");
  }
};

// @desc Update existing user
// @route PUT /api/users/:id
const updateUser = async (req, res) => {
  try {
    await client.connect();
    console.log("Connected to database");

    res
      .status(200)
      .json({ status: 200, message: `Update user ${req.params.id} ✅` });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      status: 500,
      message: "Error 500 - Internal Server Error",
    });
  } finally {
    client.close();
    console.log("Disconnected from database");
  }
};

// @desc Delete existing user
// @route DELETE /api/users/:id
const deleteUser = async (req, res) => {
  try {
    await client.connect();
    console.log("Connected to database");
    res
      .status(200)
      .json({ status: 200, message: `Delete user ${req.params.id} ✅` });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      status: 500,
      message: "Error 500 - Internal Server Error",
    });
  } finally {
    client.close();
    console.log("Disconnected from database");
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
