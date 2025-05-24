const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * @swagger
 * /api/addPlayerStats:
 *   post:
 *     summary: Add a player stat to a leaderboard
 *     tags:
 *       - Leaderboards
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - mode
 *               - playerName
 *             properties:
 *               mode:
 *                 type: string
 *                 enum: [ONE_VS_ONE, TWO_VS_TWO, THREE_VS_THREE]
 *               playerName:
 *                 type: string
 *               goals:
 *                 type: integer
 *               saves:
 *                 type: integer
 *               assists:
 *                 type: integer
 *               points:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Player stat created
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
const addPlayerStats = async (req, res) => {
  try {
    const { mode, playerName, goals, saves, assists, points } = req.body;

    if (!mode || !playerName) {
      return res
        .status(400)
        .json({ error: "mode and playerName are required" });
    }

    // Find or create the leaderboard for the given mode
    let leaderboard = await prisma.leaderboard.findFirst({
      where: { mode },
    });

    if (!leaderboard) {
      leaderboard = await prisma.leaderboard.create({
        data: {
          title: `${mode} Leaderboard`,
          mode,
        },
      });
    }

    // Create the player stat entry
    const playerStats = await prisma.playerStats.create({
      data: {
        leaderboardId: leaderboard.id,
        playerName,
        goals: goals ?? 0,
        saves: saves ?? 0,
        assists: assists ?? 0,
        points: points ?? 0,
      },
    });

    res.status(201).json(playerStats);
  } catch (error) {
    console.error("Error creating player stat:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

/**
 * @swagger
 * /api/createLeaderboard:
 *   post:
 *     summary: Create a new leaderboard
 *     tags:
 *       - Leaderboards
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - mode
 *             properties:
 *               title:
 *                 type: string
 *               mode:
 *                 type: string
 *                 enum: [ONE_VS_ONE, TWO_VS_TWO, THREE_VS_THREE]
 *     responses:
 *       201:
 *         description: Leaderboard created
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
const createLeaderboard = async (req, res) => {
  try {
    const { title, mode } = req.body;

    if (!title || !mode) {
      return res.status(400).json({ error: "title and mode are required" });
    }

    const leaderboard = await prisma.leaderboard.create({
      data: {
        title,
        mode,
      },
    });

    res.status(201).json(leaderboard);
  } catch (error) {
    console.error("Error creating leaderboard:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { createLeaderboard, addPlayerStats };
