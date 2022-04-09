"use strict";

const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../handlers/userHandlers");

router.route("/").get(getUsers);
router.route("/").post(createUser);
router.route("/:id").put(updateUser);
router.route("/:id").delete(deleteUser);

module.exports = router;
