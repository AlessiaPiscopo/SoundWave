// give each resource in your API its own route file.

const express = require("express");
const router = express.Router();

// we only need "/" because "/api/users" is already specified in server.js
router.get("/", (req, res) => {
  res.status(200).json({ status: 200, message: "Get user ✅" });
});

router.post("/", (req, res) => {
  res.status(200).json({ status: 200, message: "Create user ✅" });
});

router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ status: 200, message: `Update user ${req.params.id} ✅` });
});

router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ status: 200, message: `Delete user ${req.params.id} ✅` });
});

module.exports = router;
