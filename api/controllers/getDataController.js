const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * @swagger
 * /api/leaderboards:
 *   get:
 *     summary: Get all leaderboards with their player stats
 *     tags:
 *       - Leaderboards
 *     responses:
 *       200:
 *         description: A list of leaderboards with player stats
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   mode:
 *                     type: string
 *                   playerStats:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                         leaderboardId:
 *                           type: integer
 *                         playerId:
 *                           type: string
 *                         playerName:
 *                           type: string
 *                         goals:
 *                           type: integer
 *                         saves:
 *                           type: integer
 *                         assists:
 *                           type: integer
 *                         points:
 *                           type: integer
 *       500:
 *         description: Internal server error
 */
const getAllLeaderboardsWithStats = async (req, res) => {
  try {
    const leaderboards = await prisma.leaderboard.findMany({
      include: {
        playerStats: true,
      },
    });
    res.json(leaderboards);
  } catch (error) {
    console.error("Error fetching leaderboards:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

/**
 * @swagger
 * /api/leaderboards/list:
 *   get:
 *     summary: Get all leaderboards (without player stats)
 *     tags:
 *       - Leaderboards
 *     responses:
 *       200:
 *         description: A list of leaderboards
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   mode:
 *                     type: string
 *       500:
 *         description: Internal server error
 */
const getAllLeaderboards = async (req, res) => {
  try {
    const leaderboards = await prisma.leaderboard.findMany({
      select: {
        id: true,
        title: true,
        mode: true,
      },
    });
    res.json(leaderboards);
  } catch (error) {
    console.error("Error fetching leaderboards:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAllLeaderboardsWithStats, getAllLeaderboards };
