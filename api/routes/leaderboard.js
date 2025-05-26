const express = require("express");
const {
  getLeaderboards,
  createLeaderboard,
  updateLeaderboard,
} = require("../controllers/leaderboardController"); // Adjust the path as necessary
const router = express.Router();

router.get("/api/leaderboards", getLeaderboards);
router.post("/api/leaderboards", createLeaderboard);
router.put("/api/leaderboards", updateLeaderboard);

module.exports = router;
