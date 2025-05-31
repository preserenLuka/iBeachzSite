const express = require("express");
const {
  getLeaderboardPlayers,
} = require("../controllers/leaderboardController"); // Adjust the path as necessary
const router = express.Router();

router.get("/api/leaderboards/:id/players", getLeaderboardPlayers);

module.exports = router;
