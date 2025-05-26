const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * @swagger
 * /api/matches:
 *   get:
 *     summary: Get matches with optional filtering and sorting
 *     tags:
 *       - Match
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           enum: [10, 25, 50, 75]
 *         description: Number of matches to return
 *       - in: query
 *         name: playerName
 *         schema:
 *           type: string
 *         description: Filter matches by player name
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Sort by match duration
 *     responses:
 *       200:
 *         description: List of matches
 *       400:
 *         description: Invalid parameters
 *       500:
 *         description: Internal server error
 */
const getMatches = async (req, res) => {
  try {
    const { limit = 10, playerName, order = "desc" } = req.query;
    const validLimits = [10, 25, 50, 75];
    const parsedLimit = parseInt(limit, 10);

    if (!validLimits.includes(parsedLimit)) {
      return res.status(400).json({ error: "Invalid limit" });
    }

    // Build the where clause
    let where = {};
    if (playerName) {
      where = {
        playerMatches: {
          some: {
            player: {
              playerName: playerName,
            },
          },
        },
      };
    }

    const matches = await prisma.match.findMany({
      where,
      include: {
        playerMatches: true,
      },
      orderBy: {
        duration: order === "asc" ? "asc" : "desc",
      },
      take: parsedLimit,
    });

    res.json(matches);
  } catch (error) {
    console.error("Error fetching matches:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getMatches };
