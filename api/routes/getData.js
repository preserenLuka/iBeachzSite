const express = require("express");
const {
  getAllLeaderboardsWithStats,
  getAllLeaderboards,
} = require("../controllers/getDataController");
const router = express.Router();

// Get all leaderboards with player stats
router.get("/api/leaderboards", getAllLeaderboardsWithStats);

// Get all leaderboards (without player stats)
router.get("/api/leaderboards/list", getAllLeaderboards);

module.exports = router;
