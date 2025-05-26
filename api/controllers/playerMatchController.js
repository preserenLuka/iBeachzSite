const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * @swagger
 * /api/playermatch:
 *   post:
 *     summary: Create a PlayerMatch entry (per-player match stats)
 *     tags:
 *       - PlayerMatch
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - matchId
 *               - playerStatsId
 *               - team
 *             properties:
 *               matchId:
 *                 type: integer
 *               playerStatsId:
 *                 type: integer
 *               team:
 *                 type: string
 *                 enum: [BLUE, ORANGE]
 *               goals:
 *                 type: integer
 *               assists:
 *                 type: integer
 *               saves:
 *                 type: integer
 *               shots:
 *                 type: integer
 *               points:
 *                 type: integer
 *     responses:
 *       201:
 *         description: PlayerMatch created
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
const createPlayerMatch = async (req, res) => {
  try {
    const {
      matchId,
      playerStatsId,
      team,
      goals = 0,
      assists = 0,
      saves = 0,
      shots = 0,
      points = 0,
    } = req.body;

    if (!matchId || !playerStatsId || !team) {
      return res.status(400).json({ error: "matchId, playerStatsId, and team are required" });
    }

    const playerMatch = await prisma.playerMatch.create({
      data: {
        matchId,
        playerStatsId,
        team,
        goals,
        assists,
        saves,
        shots,
        points,
      },
    });

    res.status(201).json(playerMatch);
  } catch (error) {
    console.error("Error creating PlayerMatch:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createPlayerMatch };