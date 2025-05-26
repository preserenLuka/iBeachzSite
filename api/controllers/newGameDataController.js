const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * @swagger
 * /api/newgamedata:
 *   post:
 *     summary: Receive and process new game data
 *     tags:
 *       - GameData
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - duration
 *               - players
 *             properties:
 *               duration:
 *                 type: integer
 *               map:
 *                 type: string
 *                 description: Name of the map (optional)
 *               players:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     playerName:
 *                       type: string
 *                     team:
 *                       type: string
 *                       enum: [BLUE, ORANGE]
 *                     goals:
 *                       type: integer
 *                     assists:
 *                       type: integer
 *                     saves:
 *                       type: integer
 *                     points:
 *                       type: integer
 *                     shots:
 *                       type: integer
 *                     demos:
 *                       type: integer
 *                     hasBeenDemoed:
 *                       type: boolean
 *                     boostCollected:
 *                       type: integer
 *                     boostUsed:
 *                       type: integer
 *     responses:
 *       201:
 *         description: Game data received and processed
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
const newGameData = async (req, res) => {
  try {
    const { duration, map, players } = req.body;
    console.log("[newGameData] Received data:", req.body);

    if (duration == null || !Array.isArray(players) || players.length === 0) {
      console.log("[newGameData] Missing duration or players");
      return res
        .status(400)
        .json({ error: "duration and players are required" });
    }

    // 1. Determine leaderboard mode based on number of players
    let mode = null;
    switch (players.length) {
      case 2:
        mode = "ONE_VS_ONE";
        break;
      case 4:
        mode = "TWO_VS_TWO";
        break;
      case 6:
        mode = "THREE_VS_THREE";
        break;
      default:
        mode = "UNKNOWN";
    }
    console.log("[newGameData] Mode determined:", mode);

    // 2. Calculate blueScore and orangeScore
    const blueScore = players
      .filter((p) => p.team === "BLUE")
      .reduce((sum, p) => sum + (p.goals || 0), 0);
    const orangeScore = players
      .filter((p) => p.team === "ORANGE")
      .reduce((sum, p) => sum + (p.goals || 0), 0);
    console.log("[newGameData] Scores calculated:", { blueScore, orangeScore });

    // 3. Determine winner
    let winner = "UNKNOWN";
    if (blueScore > orangeScore) winner = "BLUE";
    else if (orangeScore > blueScore) winner = "ORANGE";
    console.log("[newGameData] Winner determined:", winner);

    // 4. Find or create leaderboard for this mode
    let leaderboard = await prisma.leaderboard.findFirst({ where: { mode } });
    if (!leaderboard) {
      console.log("[newGameData] Creating new leaderboard for mode:", mode);
      leaderboard = await prisma.leaderboard.create({
        data: { title: mode, mode },
      });
    }
    console.log("[newGameData] Leaderboard ID:", leaderboard.id);

    // 5. Create the match
    const match = await prisma.match.create({
      data: {
        duration,
        leaderboardId: leaderboard.id,
        blueScore,
        orangeScore,
        winner,
      },
    });
    console.log("[newGameData] Match created with ID:", match.id);

    await processPlayers(players, leaderboard, winner, match.id);

    res.status(201).json({
      message: "Match created",
      match,
      mode,
      blueScore,
      orangeScore,
      winner,
      leaderboardId: leaderboard.id,
    });
  } catch (error) {
    console.error("[newGameData] Error processing game data:", error);
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
};

const processPlayers = async (players, leaderboard, winner, matchId) => {
  const playerStatsMap = {}; // Map to store player stats by playerName
  console.log("[processPlayers] Start processing players for match:", matchId);

  for (const player of players) {
    console.log(`[processPlayers] Processing player: ${player.playerName}`);

    // Find PlayerStats for this player and leaderboard
    let playerStats = await prisma.playerStats.findFirst({
      where: {
        playerName: player.playerName,
        leaderboardId: leaderboard.id,
      },
    });

    // Calculate win/loss for this player
    const isWinner = player.team === winner;

    if (!playerStats) {
      console.log(
        `[processPlayers] Creating new PlayerStats for: ${player.playerName}`
      );
      // Create new PlayerStats
      playerStats = await prisma.playerStats.create({
        data: {
          leaderboardId: leaderboard.id,
          playerName: player.playerName,
          goals: player.goals || 0,
          saves: player.saves || 0,
          assists: player.assists || 0,
          points: player.points || 0,
          shots: player.shots || 0,
          matchesPlayed: 1,
          wins: isWinner ? 1 : 0,
          losses: isWinner ? 0 : 1,
        },
      });
    } else {
      console.log(
        `[processPlayers] Updating PlayerStats for: ${player.playerName}`
      );
      // Update existing PlayerStats
      await prisma.playerStats.update({
        where: { id: playerStats.id },
        data: {
          goals: playerStats.goals + (player.goals || 0),
          saves: playerStats.saves + (player.saves || 0),
          assists: playerStats.assists + (player.assists || 0),
          points: playerStats.points + (player.points || 0),
          shots: playerStats.shots + (player.shots || 0),
          matchesPlayed: playerStats.matchesPlayed + 1,
          wins: playerStats.wins + (isWinner ? 1 : 0),
          losses: playerStats.losses + (isWinner ? 0 : 1),
        },
      });
    }

    // Store playerStats in the map
    playerStatsMap[player.playerName] = playerStats;

    console.log(
      `[processPlayers] Creating PlayerMatch for: ${player.playerName}`
    );
    await prisma.playerMatch.create({
      data: {
        matchId: matchId,
        playerStatsId: playerStats.id,
        team: player.team,
        goals: player.goals || 0,
        assists: player.assists || 0,
        saves: player.saves || 0,
        shots: player.shots || 0,
        points: player.points || 0,
      },
    });
  }

  console.log(
    "[processPlayers] Finished processing players. Updating teammate and opponent records..."
  );
  await updateTeammateAndOpponentRecords(players, winner, playerStatsMap);
  console.log(
    "[processPlayers] Finished updating teammate and opponent records."
  );
};

const updateTeammateAndOpponentRecords = async (
  players,
  winner,
  playerStatsMap
) => {
  console.log("[updateTeammateAndOpponentRecords] Start");
  for (const player of players) {
    const playerStats = playerStatsMap[player.playerName];
    const isWinner = player.team === winner;

    // Teammates: all players on the same team except self
    const teammates = players.filter(
      (p) => p.team === player.team && p.playerName !== player.playerName
    );
    for (const teammate of teammates) {
      const teammateStats = playerStatsMap[teammate.playerName];
      let record = await prisma.teammateRecord.findFirst({
        where: {
          playerId: playerStats.playerId,
          teammateId: teammateStats.playerId,
        },
      });
      if (!record) {
        console.log(
          `[updateTeammateAndOpponentRecords] Creating TeammateRecord: ${player.playerName} + ${teammate.playerName}`
        );
        await prisma.teammateRecord.create({
          data: {
            playerId: playerStats.playerId,
            teammateId: teammateStats.playerId,
            wins: isWinner ? 1 : 0,
            losses: isWinner ? 0 : 1,
          },
        });
      } else {
        console.log(
          `[updateTeammateAndOpponentRecords] Updating TeammateRecord: ${player.playerName} + ${teammate.playerName}`
        );
        await prisma.teammateRecord.update({
          where: { id: record.id },
          data: {
            wins: record.wins + (isWinner ? 1 : 0),
            losses: record.losses + (isWinner ? 0 : 1),
          },
        });
      }
    }

    // Opponents: all players on the other team
    const opponents = players.filter((p) => p.team !== player.team);
    for (const opponent of opponents) {
      const opponentStats = playerStatsMap[opponent.playerName];
      let record = await prisma.opponentRecord.findFirst({
        where: {
          playerId: playerStats.playerId,
          opponentId: opponentStats.playerId,
        },
      });
      if (!record) {
        console.log(
          `[updateTeammateAndOpponentRecords] Creating OpponentRecord: ${player.playerName} vs ${opponent.playerName}`
        );
        await prisma.opponentRecord.create({
          data: {
            playerId: playerStats.playerId,
            opponentId: opponentStats.playerId,
            wins: isWinner ? 1 : 0,
            losses: isWinner ? 0 : 1,
          },
        });
      } else {
        console.log(
          `[updateTeammateAndOpponentRecords] Updating OpponentRecord: ${player.playerName} vs ${opponent.playerName}`
        );
        await prisma.opponentRecord.update({
          where: { id: record.id },
          data: {
            wins: record.wins + (isWinner ? 1 : 0),
            losses: record.losses + (isWinner ? 0 : 1),
          },
        });
      }
    }
  }
  console.log("[updateTeammateAndOpponentRecords] Done");
};

module.exports = { newGameData };
