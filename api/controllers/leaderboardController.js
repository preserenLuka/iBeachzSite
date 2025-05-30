const prisma = require("../util/prisma");
/**
 * @swagger
 * /api/leaderboards:
 *   get:
 *     summary: Get all leaderboards
 *     tags:
 *       - Leaderboards
 *     responses:
 *       200:
 *         description: A list of leaderboards
 * /api/leaderboards/{id}:
 *   put:
 *     summary: Update a leaderboard
 *     tags:
 *       - Leaderboards
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               mode:
 *                 type: string
 *                 enum: [ONE_VS_ONE, TWO_VS_TWO, THREE_VS_THREE]
 *     responses:
 *       200:
 *         description: Leaderboard updated
 *       400:
 *         description: Bad request
 *       404:
 *         description: Leaderboard not found
 *       500:
 *         description: Internal server error
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
 *         name: orderBy
 *         schema:
 *           type: string
 *           enum: [goals, saves, assists, shots]
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
 *           enum: [10, 25, 50, 75]
 *         description: Number of players to return
 *     responses:
 *       200:
 *         description: List of players with stats
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   playerName:
 *                     type: string
 *                   goals:
 *                     type: integer
 *                   saves:
 *                     type: integer
 *                   assists:
 *                     type: integer
 *                   shots:
 *                     type: integer
 *       400:
 *         description: Invalid parameters
 *       500:
 *         description: Internal server error
 */

// GET all leaderboards
const getLeaderboards = async (req, res) => {
  try {
    const leaderboards = await prisma.leaderboard.findMany();
    res.json(leaderboards);
  } catch (error) {
    console.error("Error fetching leaderboards:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// PUT update leaderboard
const updateLeaderboard = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, mode } = req.body;
    const leaderboard = await prisma.leaderboard.update({
      where: { id: Number(id) },
      data: { ...(title && { title }), ...(mode && { mode }) },
    });
    res.json(leaderboard);
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Leaderboard not found" });
    }
    console.error("Error updating leaderboard:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// GET players and stats for a leaderboard
const getLeaderboardPlayers = async (req, res) => {
  try {
    const { id } = req.params;
    const { orderBy = "goals", order = "desc", limit = 10 } = req.query;
    const validFields = ["goals", "saves", "assists", "shots"];
    const validLimits = [10, 25, 50, 75];
    const parsedLimit = parseInt(limit, 10);

    if (!validFields.includes(orderBy)) {
      return res.status(400).json({ error: "Invalid orderBy field" });
    }
    if (!validLimits.includes(parsedLimit)) {
      return res.status(400).json({ error: "Invalid limit" });
    }

    const players = await prisma.playerStats.findMany({
      where: { leaderboardId: Number(id) },
      select: {
        id: true,
        playerName: true,
        goals: true,
        saves: true,
        assists: true,
        shots: true,
      },
      orderBy: {
        [orderBy]: order === "asc" ? "asc" : "desc",
      },
      take: parsedLimit,
    });
    res.json(players);
  } catch (error) {
    console.error("Error fetching leaderboard players:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getLeaderboards,
  updateLeaderboard,
  getLeaderboardPlayers,
};
