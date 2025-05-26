const express = require("express");
const { getAllNotes, createNote } = require("../controllers/notesController"); // Adjust the path as necessary
const router = express.Router();

router.get("/api/notes", getAllNotes);
router.post("/api/notes", createNote);

module.exports = router;
