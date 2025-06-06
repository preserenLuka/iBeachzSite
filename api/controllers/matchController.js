const prisma = require("../util/prisma");
const retryAsync = require("../util/retry");
/**
 * @swagger
 * /api/matches:
 *   get:
 *     summary: Get matches with optional player name filtering
 *     tags:
 *       - Match
 *     parameters:
 *       - in: query
 *         name: playerName
 *         schema:
 *           type: string
 *         description: >
 *           Filter matches by player name (partial match, case-insensitive if DB collation allows).
 *           Returns matches where any player in the match has a name containing this value.
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
    const { playerName } = req.query;

    // Build the where clause
    let where = {};
    if (playerName) {
      where = {
        playerMatches: {
          some: {
            player: {
              playerName: {
                contains: playerName,
                // Remove mode: "insensitive"
              },
            },
          },
        },
      };
    }

    const matches = await retryAsync(() =>
      prisma.match.findMany({
        where,
        include: {
          playerMatches: {
            include: {
              player: {
                select: {
                  playerName: true,
                },
              },
            },
          },
        },
        orderBy: {
          id: "desc", // Newest matches first
        },
        take,
        skip,
      })
    );

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
 */
const getMatchById = async (req, res) => {
  const matchId = parseInt(req.params.id, 10);
  if (isNaN(matchId)) {
    return res.status(400).json({ error: "Invalid match id" });
  }

  try {
    const match = await prisma.match.findUnique({
      where: { id: matchId },
      include: {
        playerMatches: {
          include: {
            player: {
              select: {
                playerName: true,
              },
            },
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
