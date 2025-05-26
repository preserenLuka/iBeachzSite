import React, { useEffect, useState } from "react";
import styles from "../../css/playerStats.module.css";
import { Player } from "../../util/types";
// Only allow keys that are numbers (not arrays or objects)
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
  const [player, setPlayer] = useState<Player | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPlayerData = async () => {
      const response = await fetch(`/api/player/${playerId}`);
      const data = await response.json();
      setPlayer(data);
      setLoading(false);
    };
    fetchPlayerData();
  }, [playerId]);

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
                  <td>{rec.teammateName || rec.teammateId}</td>
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
                  <td>{rec.opponentName || rec.opponentId}</td>
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
