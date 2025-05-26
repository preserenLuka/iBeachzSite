const express = require("express");
const { newGameData } = require("../controllers/newGameDataController"); // Adjust the path as necessary
const router = express.Router();

router.post("/api/newGameData", newGameData);

module.exports = router;
