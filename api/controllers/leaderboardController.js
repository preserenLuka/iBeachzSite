const prisma = require("../util/prisma");
const retryAsync = require("../util/retry");
/**
 * @swagger
 * /api/leaderboards/{id}/players:
 *   get:
 *     summary: Get players and stats for a leaderboard
 *     tags:
 *       - Leaderboards
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Filter by partial player name (case-insensitive, if DB collation allows)
 *       - in: query
 *         name: orderBy
 *         schema:
 *           type: string
 *           enum: [goals, saves, assists, shots, wins, losses, matchesPlayed, streak, longestStreak, demosInflicted, demosTaken, boostUsed]
 *         description: Field to order by
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Order direction
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           enum: [10, 15, 25]
 *         description: Number of players to return
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *     responses:
 *       200:
 *         description: List of players with stats and total entries
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 players:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       playerName:
 *                         type: string
 *                       goals:
 *                         type: integer
 *                       saves:
 *                         type: integer
 *                       assists:
 *                         type: integer
 *                       shots:
 *                         type: integer
 *                       wins:
 *                         type: integer
 *                       losses:
 *                         type: integer
 *                       matchesPlayed:
 *                         type: integer
 *                       streak:
 *                         type: integer
 *                       longestStreak:
 *                         type: integer
 *                       demosInflicted:
 *                         type: integer
 *                       demosTaken:
 *                         type: integer
 *                       boostUsed:
 *                         type: integer
 *                 totalEntries:
 *                   type: integer
 *       400:
 *         description: Invalid parameters
 *       500:
 *         description: Internal server error
 */

// GET players and stats for a leaderboard
const getLeaderboardPlayers = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      search = "",
      orderBy = "goals",
      order = "desc",
      limit = 10,
      page = 1,
    } = req.query;

    const validFields = [
      "goals",
      "saves",
      "assists",
      "shots",
      "wins",
      "losses",
      "matchesPlayed",
      "streak",
      "longestStreak",
      "demosInflicted",
      "demosTaken",
      "boostUsed",
    ];
    const validLimits = [10, 15, 25];

    const parsedLimit = parseInt(limit, 10);
    const parsedPage = parseInt(page, 10);

    if (!validFields.includes(orderBy)) {
      return res.status(400).json({ error: "Invalid orderBy field" });
    }
    if (!validLimits.includes(parsedLimit)) {
      return res.status(400).json({ error: "Invalid limit" });
    }
    if (isNaN(parsedPage) || parsedPage < 1) {
      return res.status(400).json({ error: "Invalid page number" });
    }

    // Build the 'where' clause
    const whereClause = { leaderboardId: Number(id) };
    if (search) {
      // Remove mode: 'insensitive' to avoid errors on older Prisma / MySQL
      whereClause.playerName = {
        contains: search,
      };
    }

    // Get the total number of entries
    const totalEntries = await prisma.playerStats.count({
      where: whereClause,
    });

    // Fetch players for the current page
    const players = await retryAsync(
      () =>
        prisma.playerStats.findMany({
          where: whereClause,
          select: {
            id: true,
            playerName: true,
            goals: true,
            saves: true,
            assists: true,
            shots: true,
            wins: true,
            losses: true,
            matchesPlayed: true,
            streak: true,
            longestStreak: true,
            demosInflicted: true,
            demosTaken: true,
            boostUsed: true,
          },
          orderBy: {
            [orderBy]: order === "asc" ? "asc" : "desc",
          },
          skip: (parsedPage - 1) * parsedLimit,
          take: parsedLimit,
        }),
      3, // number of retries
      2000 // delay in ms
    );

    res.json({
      players,
      totalEntries,
    });
  } catch (error) {
    console.error("Error fetching leaderboard players:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getLeaderboardPlayers,
};
