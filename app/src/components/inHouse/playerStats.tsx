import React, { useEffect, useState } from "react";
import styles from "./css/playerStats.module.css";
import { Player, TeammateRecord, OpponentRecord } from "../../util/types";

type PlayerStatKey =
  | "goals"
  | "assists"
  | "saves"
  | "points"
  | "shots"
  | "streak"
  | "matchesPlayed"
  | "wins"
  | "losses";

const statSquares: { key: PlayerStatKey; label: string }[] = [
  { key: "goals", label: "Goals" },
  { key: "assists", label: "Assists" },
  { key: "saves", label: "Saves" },
  { key: "shots", label: "Shots" },
];

const extraStats: { key: PlayerStatKey; label: string }[] = [
  { key: "wins", label: "Wins" },
  { key: "matchesPlayed", label: "Matches Played" },
  { key: "losses", label: "Losses" },
  { key: "points", label: "Points" },
];

const PlayerStats: React.FC<{ playerId: string }> = ({ playerId }) => {
  // Use a number state for the current player ID
  const [currentPlayerId, setCurrentPlayerId] = useState<number>(
    parseInt(playerId, 10)
  );
  const [player, setPlayer] = useState<Player | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPlayerData = async (id: number) => {
    setLoading(true);
    const response = await fetch(`/api/player/${id}`);
    const data = await response.json();
    setPlayer(data);
    setLoading(false);
  };

  useEffect(() => {
    setCurrentPlayerId(parseInt(playerId, 10));
  }, [playerId]);

  useEffect(() => {
    fetchPlayerData(currentPlayerId);
  }, [currentPlayerId]);

  if (loading) return <div>Loading...</div>;
  if (!player) return <div>Player not found</div>;

  // Custom streak label logic
  let streakLabel = "No streak";
  if (player.streak > 0) {
    streakLabel = `Win Streak ${player.streak}`;
  } else if (player.streak < 0) {
    streakLabel = `Lose Streak ${Math.abs(player.streak)}`;
  }

  // Calculate Player Rating
  const matchesPlayed = player.matchesPlayed || 0;
  const goalsPerGame = matchesPlayed ? player.goals / matchesPlayed : 0;
  const assistsPerGame = matchesPlayed ? player.assists / matchesPlayed : 0;
  const savesPerGame = matchesPlayed ? player.saves / matchesPlayed : 0;
  const pointsPerGame = matchesPlayed ? player.points / matchesPlayed : 0;
  const shootingPercentage = player.shots > 0 ? player.goals / player.shots : 0;
  const winRate = matchesPlayed > 0 ? player.wins / matchesPlayed : 0;

  const playerScore =
    savesPerGame * 10 +
    pointsPerGame * 0.05 +
    shootingPercentage * 100 +
    goalsPerGame * 15 +
    assistsPerGame * 10 +
    winRate * 50;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{player.playerName}</h2>
      <div className={styles.mainContent}>
        <div className={styles.leftColumn}>
          <div className={styles.statRow}>
            {statSquares.map((stat) => (
              <div key={stat.key} className={styles.statSquare}>
                <div className={styles.statLabel}>{stat.label}</div>
                <div className={styles.statValue}>{player[stat.key]}</div>
              </div>
            ))}
          </div>
          <div className={styles.extraStatsRow}>
            {extraStats.map((stat) => (
              <div key={stat.key} className={styles.extraStat}>
                <div className={styles.extraStatLabel}>{stat.label}</div>
                <div className={styles.statValue}>{player[stat.key]}</div>
              </div>
            ))}
            <div className={styles.extraStat}>
              <div className={styles.extraStatLabel}>Streak</div>
              <div className={styles.statValue}>{streakLabel}</div>
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={`${styles.coloredSquare} ${styles.square1}`}>
            <div>
              <div>Win %</div>
              <div style={{ fontSize: 28 }}>{(winRate * 100).toFixed(1)}%</div>
            </div>
          </div>
          <div className={`${styles.coloredSquare} ${styles.square2}`}>
            <div>
              <div>Player Score</div>
              <div style={{ fontSize: 28 }}>{playerScore.toFixed(1)}</div>
            </div>
          </div>
          <div className={`${styles.coloredSquare} ${styles.square3}`}>
            <div>
              <div>Shooting %</div>
              <div style={{ fontSize: 28 }}>
                {(shootingPercentage * 100).toFixed(1)}%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.subTitle}>Teammate Records</h3>
        {player.teammateRecords.length === 0 ? (
          <div>No teammate records.</div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Teammate</th>
                <th>Wins</th>
                <th>Losses</th>
              </tr>
            </thead>
            <tbody>
              {player.teammateRecords.map((rec: TeammateRecord) => (
                <tr key={rec.id}>
                  <td>
                    <span
                      className={styles.playerLink}
                      style={{
                        cursor: "pointer",
                        color: "var(--primary)",
                        textDecoration: "underline",
                      }}
                      onClick={() => setCurrentPlayerId(rec.teammateId)}
                    >
                      {rec.teammateName || rec.teammateId}
                    </span>
                  </td>
                  <td>{rec.wins}</td>
                  <td>{rec.losses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <h3 className={styles.subTitle}>Opponent Records</h3>
        {player.opponentRecords.length === 0 ? (
          <div>No opponent records.</div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Opponent</th>
                <th>Wins</th>
                <th>Losses</th>
              </tr>
            </thead>
            <tbody>
              {player.opponentRecords.map((rec: OpponentRecord) => (
                <tr key={rec.id}>
                  <td>
                    <span
                      className={styles.playerLink}
                      style={{
                        cursor: "pointer",
                        color: "var(--primary)",
                        textDecoration: "underline",
                      }}
                      onClick={() => setCurrentPlayerId(rec.opponentId)}
                    >
                      {rec.opponentName || rec.opponentId}
                    </span>
                  </td>
                  <td>{rec.wins}</td>
                  <td>{rec.losses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PlayerStats;
