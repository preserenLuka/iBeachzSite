const express = require("express");
const { getAllUsers, createUser } = require("../controllers/userController"); // Adjust the path as necessary
const router = express.Router();

router.get("/api/users", getAllUsers);
router.post("/api/users", createUser);

module.exports = router;
