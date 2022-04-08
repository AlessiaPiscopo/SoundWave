// @desc Get users
// @route GET /api/users
const getUsers = (req, res) => {
  res.status(200).json({ status: 200, message: "Get users ✅" });
};

// @desc Create new user
// @route POST /api/users
const createUser = (req, res) => {
  res.status(200).json({ status: 200, message: "Create user ✅" });
  if (!req.body) {
    res.status(400).json({ status: 400, message: "❗️ Error creating user" })
  }
};

// @desc Update existing user
// @route PUT /api/user/:id
const updateUser = (req, res) => {
  res
    .status(200)
    .json({ status: 200, message: `Update user ${req.params.id} ✅` });
};

// @desc Delete existing user
// @route DELETE /api/user/:id
const deleteUser = (req, res) => {
  res
    .status(200)
    .json({ status: 200, message: `Delete user ${req.params.id} ✅` });
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
