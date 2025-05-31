const express = require("express");
const {
  getLeaderboardPlayers,
  clearAllData,
} = require("../controllers/leaderboardController"); // Adjust the path as necessary
const router = express.Router();

router.get("/api/leaderboards/:id/players", getLeaderboardPlayers);
router.delete("/api/clearData", clearAllData);

module.exports = router;
