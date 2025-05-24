const express = require("express");
const {
  addPlayerStats,
  createLeaderboard,
} = require("../controllers/postDataController");
const router = express.Router();

// Route to create a new topic
router.post("/api/addPlayerStats", addPlayerStats);
router.post("/api/createLeaderboard", createLeaderboard);

module.exports = router;
