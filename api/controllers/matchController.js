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
 *         name: playerName
 *         schema:
 *           type: string
 *         description: >
 *           Filter matches by player name (case-insensitive, partial match).
 *           Returns matches where any player in the match has a name containing this value.
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Sort by match duration
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number (8 matches per page)
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
    // Always use 8 per page
    const page = parseInt(req.query.page, 10) || 1;
    const take = 8;
    const skip = (page - 1) * take;
    const { playerName, order = "desc" } = req.query;

    // Build the where clause
    let where = {};
    if (playerName) {
      where = {
        playerMatches: {
          some: {
            player: {
              playerName: {
                contains: playerName.toLowerCase(),
              },
            },
          },
        },
      };
    }

    const matches = await prisma.match.findMany({
      where,
      include: {
        playerMatches: {
          include: {
            player: true,
          },
        },
      },
      orderBy: {
        duration: order === "asc" ? "asc" : "desc",
      },
      take,
      skip,
    });

    // For frontend pagination: check if there are more matches
    const totalCount = await prisma.match.count({ where });
    const hasMore = skip + take < totalCount;

    res.json({ matches, hasMore });
  } catch (error) {
    console.error("Error fetching matches:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

/**
 * @swagger
 * /api/match/{id}:
 *   get:
 *     summary: Get a match by its ID
 *     tags:
 *       - Match
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The match ID
 *     responses:
 *       200:
 *         description: Match details
 *       400:
 *         description: Invalid match id
 *       404:
 *         description: Match not found
 *       500:
 *         description: Internal server error
 */
const getMatchById = async (req, res) => {
  try {
    const matchId = parseInt(req.params.id, 10);
    if (isNaN(matchId))
      return res.status(400).json({ error: "Invalid match id" });

    const match = await prisma.match.findUnique({
      where: { id: matchId },
      include: {
        playerMatches: {
          include: {
            player: true, // This will include PlayerStats, which has playerName
          },
        },
      },
    });

    if (!match) return res.status(404).json({ error: "Match not found" });

    res.json(match);
  } catch (error) {
    console.error("Error fetching match by id:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getMatches,
  getMatchById,
};
