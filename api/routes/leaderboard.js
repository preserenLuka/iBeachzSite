const express = require("express");
const {
  getLeaderboards,
  getLeaderboardPlayers,
  updateLeaderboard,
} = require("../controllers/leaderboardController"); // Adjust the path as necessary
const router = express.Router();

router.get("/api/leaderboards", getLeaderboards);
router.get("/api/leaderboards/:id/players", getLeaderboardPlayers);
router.put("/api/leaderboards", updateLeaderboard);

module.exports = router;
