const express = require("express");
const { getPlayerData } = require("../controllers/playerController"); // Adjust the path as necessary
const router = express.Router();

router.get("/api/player/:id", getPlayerData);

module.exports = router;
