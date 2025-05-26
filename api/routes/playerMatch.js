const express = require("express");
const { createPlayerMatch } = require("../controllers/playerMatchController"); // Adjust the path as necessary
const router = express.Router();

router.post("/api/playerMatch", createPlayerMatch);

module.exports = router;
