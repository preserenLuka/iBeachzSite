const prisma = require("../util/prisma");

const clearAllData = async (req, res) => {
  try {
    const adminPassword = req.headers["x-admin-password"];
    const CORRECT_PASSWORD = process.env.DELETE_PASSWORD;

    if (!adminPassword || adminPassword !== CORRECT_PASSWORD) {
      return res.status(401).json({ error: "Unauthorized: Invalid password" });
    }

    // Delete in order to avoid foreign key constraint errors
    await prisma.playerMatch.deleteMany({});
    await prisma.match.deleteMany({});
    await prisma.teammateRecord.deleteMany({});
    await prisma.opponentRecord.deleteMany({});
    await prisma.playerStats.deleteMany({});
    await prisma.leaderboard.deleteMany({});
    await prisma.note.deleteMany({});
    await prisma.user.deleteMany({});

    res.json({ message: "All data deleted from all tables." });
  } catch (error) {
    console.error("Error clearing all data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  clearAllData,
};
