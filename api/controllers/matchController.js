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
 *         description: Filter matches by player name (case-insensitive, partial match)
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
              playerName: playerName,
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

module.exports = { getMatches };
