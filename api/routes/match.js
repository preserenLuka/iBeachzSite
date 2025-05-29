const express = require("express");
const { getMatches, getMatchById } = require("../controllers/matchController");
const router = express.Router();

router.get("/api/matches", getMatches);
router.get("/api/match/:id", getMatchById);

module.exports = router;
