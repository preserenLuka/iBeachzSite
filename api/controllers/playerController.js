const prisma = require("../util/prisma");
/**
 * @swagger
 * /api/player/{id}:
 *   get:
 *     summary: Get player data with teammate and opponent records
 *     tags:
 *       - Player
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: PlayerStats ID
 *     responses:
 *       200:
 *         description: Player data with teammate and opponent records
 *       404:
 *         description: Player not found
 *       500:
 *         description: Internal server error
 */
const getPlayerData = async (req, res) => {
  try {
    const { id } = req.params;
    const player = await prisma.playerStats.findUnique({
      where: { id: Number(id) },
      include: {
        teammateRecords: true,
        opponentRecords: true,
      },
    });

    if (!player) {
      return res.status(404).json({ error: "Player not found" });
    }

    res.json(player);
  } catch (error) {
    console.error("Error fetching player data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getPlayerData };
