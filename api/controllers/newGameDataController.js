const prisma = require("../util/prisma");
const calculatePlayerScore = require("../util/calculatePlayerScore");
const retryAsync = require("../util/retry"); // <-- Add this line

/**
 * @swagger
 * /api/newgamedata:
 *   post:
 *     summary: Receive and process new game data
 *     tags:
 *       - GameData
 *     parameters:
 *       - in: header
 *         name: x-api-secret
 *         required: true
 *         schema:
 *           type: string
 *         description: API secret for authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - players
 *             properties:
 *               duration:
 *                 type: number
 *                 description: Match duration in seconds (optional, use matchDuration if not set)
 *               matchDuration:
 *                 type: number
 *                 description: Match duration in seconds (optional, used if duration is not set)
 *               mapName:
 *                 type: string
 *                 description: Name of the map (optional)
 *               players:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     playerId:
 *                       type: string
 *                       description: External player identifier (e.g., Steam ID)
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
 *                     demosInflicted:
 *                       type: integer
 *                     demosTaken:
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
const SECRET = process.env.API_SECRET;

const newGameData = async (req, res) => {
  const clientSecret = req.headers["x-api-secret"];
  console.log("Expected SECRET:", SECRET);
  console.log("Received x-api-secret:", clientSecret);
  if (clientSecret !== SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    // Accept both duration and matchDuration for compatibility
    let { duration, matchDuration, map, mapName, players } = req.body;
    duration = duration ?? matchDuration; // Use matchDuration if duration is not set

    // Prefer mapName, fallback to map for backward compatibility
    const finalMapName = mapName || map || null;

    console.log("[newGameData] Received data:", req.body);

    if (duration == null || !Array.isArray(players) || players.length === 0) {
      console.log("[newGameData] Missing duration or players");
      return res
        .status(400)
        .json({ error: "duration and players are required" });
    }

    // 1. Determine leaderboard mode based on number of players 2
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
    let winner = null;
    if (blueScore > orangeScore) winner = "BLUE";
    else if (orangeScore > blueScore) winner = "ORANGE";
    // winner stays null for ties
    console.log("[newGameData] Winner determined:", winner);

    // 4. Find or create leaderboard for this mode
    let leaderboard = await retryAsync(() =>
      prisma.leaderboard.findFirst({ where: { mode } })
    );
    if (!leaderboard) {
      console.log(`[newGameData] No leaderboard found for mode: ${mode}`);
      return res.status(400).json({
        error: `Leaderboard for mode ${mode} does not exist. Please create it manually.`,
      });
    }
    console.log("[newGameData] Leaderboard ID:", leaderboard.id);

    // 5. Create the match
    const match = await retryAsync(() =>
      prisma.match.create({
        data: {
          duration,
          leaderboardId: leaderboard.id,
          blueScore,
          orangeScore,
          winner,
          mapName: finalMapName,
        },
      })
    );
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
  const playerStatsMap = {};

  for (const player of players) {
    console.log(`[processPlayers] Processing player: ${player.playerName}`);

    // Find PlayerStats for this player and leaderboard
    let playerStats = await retryAsync(() =>
      prisma.playerStats.findFirst({
        where: {
          playerId: player.playerId,
          leaderboardId: leaderboard.id,
        },
      })
    );

    // Calculate win/loss for this player
    const isWinner = player.team === winner;

    // Streak logic with detailed logs
    let newStreak = 0;
    let newLongestStreak = 0;

    if (playerStats) {
      if (isWinner) {
        if (playerStats.streak > 0) {
          newStreak = playerStats.streak + 1;
          console.log(
            `[streak] ${player.playerName} continues win streak: ${playerStats.streak} -> ${newStreak}`
          );
        } else {
          newStreak = 1;
          console.log(
            `[streak] ${player.playerName} win after loss streak: ${playerStats.streak} -> 1`
          );
        }
      } else {
        if (playerStats.streak < 0) {
          newStreak = playerStats.streak - 1;
          console.log(
            `[streak] ${player.playerName} continues loss streak: ${playerStats.streak} -> ${newStreak}`
          );
        } else {
          newStreak = -1;
          console.log(
            `[streak] ${player.playerName} loss after win streak: ${playerStats.streak} -> -1`
          );
        }
      }
      newLongestStreak = Math.max(
        playerStats.longestStreak,
        newStreak > 0 ? newStreak : 0
      );
      if (newLongestStreak !== playerStats.longestStreak) {
        console.log(
          `[longestStreak] ${player.playerName} new longest streak: ${newLongestStreak}`
        );
      }
    } else {
      newStreak = isWinner ? 1 : -1;
      newLongestStreak = newStreak > 0 ? newStreak : 0;
      console.log(
        `[streak] ${player.playerName} first game, streak: ${newStreak}, longest: ${newLongestStreak}`
      );
    }

    if (!playerStats) {
      console.log(
        `[processPlayers] Creating new PlayerStats for: ${player.playerName}`
      );
      // Create new PlayerStats
      playerStats = await retryAsync(() =>
        prisma.playerStats.create({
          data: {
            leaderboardId: leaderboard.id,
            playerId: player.playerId,
            playerName: player.playerName,
            goals: player.goals || 0,
            saves: player.saves || 0,
            assists: player.assists || 0,
            points: player.points || 0,
            shots: player.shots || 0,
            matchesPlayed: 1,
            wins: isWinner ? 1 : 0,
            losses: isWinner ? 0 : 1,
            boostUsed: player.boostUsed || 0,
            demosInflicted: player.demosInflicted || 0,
            demosTaken: player.demosTaken || 0,
            streak: newStreak,
            longestStreak: newLongestStreak,
            playerScore: 0, // will update below
          },
        })
      );
    } else {
      console.log(
        `[processPlayers] Updating PlayerStats for: ${player.playerName}`
      );
      // Update existing PlayerStats
      await retryAsync(() =>
        prisma.playerStats.update({
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
            boostUsed: playerStats.boostUsed + (player.boostUsed || 0),
            demosInflicted:
              playerStats.demosInflicted + (player.demosInflicted || 0),
            demosTaken: playerStats.demosTaken + (player.demosTaken || 0),
            streak: newStreak,
            longestStreak: newLongestStreak,
            // playerScore will update below
          },
        })
      );
    }

    // Always update playerScore after stats are up-to-date
    const updatedStats = await retryAsync(() =>
      prisma.playerStats.update({
        where: { id: playerStats.id },
        data: {
          playerScore: calculatePlayerScore({
            wins: (playerStats.wins || 0) + (isWinner ? 1 : 0),
            losses: (playerStats.losses || 0) + (isWinner ? 0 : 1),
            goals: (playerStats.goals || 0) + (player.goals || 0),
            assists: (playerStats.assists || 0) + (player.assists || 0),
            saves: (playerStats.saves || 0) + (player.saves || 0),
            shots: (playerStats.shots || 0) + (player.shots || 0),
            matchesPlayed: (playerStats.matchesPlayed || 0) + 1,
            demosInflicted:
              (playerStats.demosInflicted || 0) + (player.demosInflicted || 0),
            demosTaken:
              (playerStats.demosTaken || 0) + (player.demosTaken || 0),
            longestStreak: Math.max(
              playerStats.longestStreak || 0,
              newStreak > 0 ? newStreak : 0
            ),
          }),
        },
      })
    );

    playerStats = updatedStats;

    playerStatsMap[player.playerId] = playerStats;

    console.log(
      `[processPlayers] Creating PlayerMatch for: ${player.playerName}`
    );
    await retryAsync(() =>
      prisma.playerMatch.create({
        data: {
          matchId: matchId,
          playerStatsId: playerStats.id,
          team: player.team,
          goals: player.goals || 0,
          assists: player.assists || 0,
          saves: player.saves || 0,
          shots: player.shots || 0,
          points: player.points || 0,
          demosInflicted: player.demosInflicted || 0,
          demosTaken: player.demosTaken || 0,
        },
      })
    );
  }

  await updateTeammateAndOpponentRecords(players, winner, playerStatsMap);
};

const updateTeammateAndOpponentRecords = async (
  players,
  winner,
  playerStatsMap
) => {
  for (const player of players) {
    const playerStats = playerStatsMap[player.playerId];
    const isWinner = player.team === winner;

    // Teammates: same team, not self
    const teammates = players.filter(
      (p) => p.team === player.team && p.playerId !== player.playerId
    );
    // Opponents: other team
    const opponents = players.filter((p) => p.team !== player.team);

    // Update teammate records
    for (const teammate of teammates) {
      const teammateStats = playerStatsMap[teammate.playerId];
      if (!teammateStats) continue;

      let record = await prisma.teammateRecord.findFirst({
        where: {
          playerId: playerStats.id,
          teammateId: teammateStats.id,
        },
      });

      if (!record) {
        record = await prisma.teammateRecord.create({
          data: {
            playerId: playerStats.id,
            teammateId: teammateStats.id,
            teammateName: teammate.playerName,
            wins: isWinner ? 1 : 0,
            losses: isWinner ? 0 : 1,
          },
        });
        console.log(
          `[teammateRecord] Created for ${player.playerName} + ${
            teammate.playerName
          }: ${isWinner ? "win" : "loss"}`
        );
      } else {
        await prisma.teammateRecord.update({
          where: { id: record.id },
          data: {
            wins: record.wins + (isWinner ? 1 : 0),
            losses: record.losses + (isWinner ? 0 : 1),
          },
        });
        console.log(
          `[teammateRecord] Updated for ${player.playerName} + ${
            teammate.playerName
          }: ${isWinner ? "win" : "loss"}`
        );
      }
    }

    // Update opponent records
    for (const opponent of opponents) {
      const opponentStats = playerStatsMap[opponent.playerId];
      if (!opponentStats) continue;

      let record = await prisma.opponentRecord.findFirst({
        where: {
          playerId: playerStats.id,
          opponentId: opponentStats.id,
        },
      });

      if (!record) {
        record = await prisma.opponentRecord.create({
          data: {
            playerId: playerStats.id,
            opponentId: opponentStats.id,
            opponentName: opponent.playerName,
            wins: isWinner ? 1 : 0,
            losses: isWinner ? 0 : 1,
          },
        });
        console.log(
          `[opponentRecord] Created for ${player.playerName} vs ${
            opponent.playerName
          }: ${isWinner ? "win" : "loss"}`
        );
      } else {
        await prisma.opponentRecord.update({
          where: { id: record.id },
          data: {
            wins: record.wins + (isWinner ? 1 : 0),
            losses: record.losses + (isWinner ? 0 : 1),
          },
        });
        console.log(
          `[opponentRecord] Updated for ${player.playerName} vs ${
            opponent.playerName
          }: ${isWinner ? "win" : "loss"}`
        );
      }
    }
  }
};

module.exports = { newGameData };
