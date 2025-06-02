const express = require("express");
const { clearAllData } = require("../controllers/clearDataController"); // Adjust the path as necessary
const router = express.Router();

router.delete("/api/clearData", clearAllData);

module.exports = router;
