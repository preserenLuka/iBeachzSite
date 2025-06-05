const express = require("express");
const {
  getLeaderboardPlayers,
  fixLeaderboards,
} = require("../controllers/leaderboardController"); // Adjust the path as necessary
const router = express.Router();

router.get("/api/leaderboards/:id/players", getLeaderboardPlayers);
router.get("/api/leaderboards/fix", fixLeaderboards);

module.exports = router;
