const prisma = require("../util/prisma");

/**
 * @swagger
 * /api/clearalldata:
 *   delete:
 *     summary: Deletes all data from all tables and resets auto-increment counters (admin only)
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: header
 *         name: x-api-secret
 *         required: true
 *         schema:
 *           type: string
 *         description: API secret for authorization
 *     responses:
 *       200:
 *         description: All data deleted and auto-increment counters reset
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

const clearAllData = async (req, res) => {
  try {
    const apiSecret = req.headers["x-api-secret"];
    const CORRECT_SECRET = process.env.API_SECRET;

    if (!apiSecret || apiSecret !== CORRECT_SECRET) {
      return res
        .status(401)
        .json({ error: "Unauthorized: Invalid API secret" });
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

    // Reset auto-increment counters for all tables (MySQL/MariaDB syntax)
    // You may need to adjust table names for your DB
    const tables = [
      "leaderboard",
      "playerStats",
      "playerMatch",
      "match",
      "teammateRecord",
      "opponentRecord",
      "note",
      "user",
    ];
    for (const table of tables) {
      await prisma.$executeRawUnsafe(
        `ALTER TABLE \`${table}\` AUTO_INCREMENT = 1`
      );
    }

    res.json({
      message: "All data deleted and auto-increment counters reset.",
    });
  } catch (error) {
    console.error("Error clearing all data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  clearAllData,
};
