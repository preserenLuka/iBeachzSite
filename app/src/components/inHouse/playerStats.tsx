import React, { useEffect, useState } from "react";
import styles from "./css/playerStats.module.css";
import { Player } from "../../util/types";

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
  { key: "points", label: "Points" },
];

const extraStats: { key: PlayerStatKey; label: string }[] = [
  { key: "shots", label: "Shots" },
  { key: "streak", label: "Streak" },
  { key: "matchesPlayed", label: "Matches Played" },
  { key: "wins", label: "Wins" },
  { key: "losses", label: "Losses" },
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

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{player.playerName}</h2>
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
              {player.teammateRecords.map((rec) => (
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
              {player.opponentRecords.map((rec) => (
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
