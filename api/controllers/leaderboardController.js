const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

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

// POST create leaderboard
const createLeaderboard = async (req, res) => {
  try {
    const { title, mode } = req.body;
    if (!title || !mode) {
      return res.status(400).json({ error: "title and mode are required" });
    }
    const leaderboard = await prisma.leaderboard.create({
      data: { title, mode },
    });
    res.status(201).json(leaderboard);
  } catch (error) {
    console.error("Error creating leaderboard:", error);
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

module.exports = {
  getLeaderboards,
  createLeaderboard,
  updateLeaderboard,
};
