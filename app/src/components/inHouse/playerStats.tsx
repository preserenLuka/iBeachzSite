import React, { useEffect, useState } from "react";

type TeammateRecord = {
  id: number;
  playerId: string;
  teammateId: string;
  wins: number;
  losses: number;
};
type OpponentRecord = {
  id: number;
  playerId: string;
  opponentId: string;
  wins: number;
  losses: number;
};
type Player = {
  id: number;
  leaderboardId: number;
  playerId: string;
  playerName: string;
  goals: number;
  assists: number;
  saves: number;
  points: number;
  shots: number;
  streak: number;
  matchesPlayed: number;
  wins: number;
  losses: number;
  teammateRecords: TeammateRecord[];
  opponentRecords: OpponentRecord[];
};

const statSquares = [
  { key: "goals", label: "Goals" },
  { key: "assists", label: "Assists" },
  { key: "saves", label: "Saves" },
  { key: "points", label: "Points" },
];

const extraStats = [
  { key: "shots", label: "Shots" },
  { key: "streak", label: "Streak" },
  { key: "matchesPlayed", label: "Matches Played" },
  { key: "wins", label: "Wins" },
  { key: "losses", label: "Losses" },
];

const PlayerStats: React.FC<{ playerId: string }> = ({ playerId }) => {
  const [player, setPlayer] = useState<Player | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/player/${playerId}`)
      .then((res) => res.json())
      .then((data) => {
        setPlayer(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error("Failed to fetch player data:", err);
      });
  }, [playerId]);

  if (loading) return <div>Loading...</div>;
  if (!player) return <div>No player data found.</div>;

  return (
    <div
      style={{
        width: "60%",
        margin: "40px auto",
        background: "#f9f9f9",
        borderRadius: 12,
        padding: 24,
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>
        {player.playerName}
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 24,
        }}
      >
        {statSquares.map((stat) => (
          <div
            key={stat.key}
            style={{
              flex: 1,
              margin: "0 8px",
              background: "#fff",
              borderRadius: 8,
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              padding: 16,
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontWeight: 600,
                fontSize: 16,
                marginBottom: 8,
                color: "#888",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        {extraStats.map((stat) => (
          <div
            key={stat.key}
            style={{
              flex: "1 1 30%",
              background: "#f1f1f1",
              borderRadius: 6,
              padding: 12,
              minWidth: 120,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 13, color: "#666" }}>{stat.label}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 32 }}>
        <h3>Teammate Records</h3>
        {player.teammateRecords.length === 0 ? (
          <div>No teammate records.</div>
        ) : (
          <table style={{ width: "100%", marginBottom: 16 }}>
            <thead>
              <tr>
                <th>Teammate ID</th>
                <th>Wins</th>
                <th>Losses</th>
              </tr>
            </thead>
            <tbody>
              {player.teammateRecords.map((rec) => (
                <tr key={rec.id}>
                  <td>{rec.teammateId}</td>
                  <td>{rec.wins}</td>
                  <td>{rec.losses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <h3>Opponent Records</h3>
        {player.opponentRecords.length === 0 ? (
          <div>No opponent records.</div>
        ) : (
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Opponent ID</th>
                <th>Wins</th>
                <th>Losses</th>
              </tr>
            </thead>
            <tbody>
              {player.opponentRecords.map((rec) => (
                <tr key={rec.id}>
                  <td>{rec.opponentId}</td>
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
