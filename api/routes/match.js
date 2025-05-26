const express = require("express");
const { getMatches } = require("../controllers/matchController");
const router = express.Router();

router.get("/api/matches", getMatches);

module.exports = router;
