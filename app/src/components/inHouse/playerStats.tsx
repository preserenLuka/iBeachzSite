import React from "react";

type Player = {
  playerName: string;
  goals: number;
  assists: number;
  saves: number;
  points: number;
  shots: number;
  winStreak: number;
  lossStreak: number;
  matchesPlayed: number;
  wins: number;
  losses: number;
};

const statSquares = [
  { key: "goals", label: "Goals" },
  { key: "assists", label: "Assists" },
  { key: "saves", label: "Saves" },
  { key: "points", label: "Points" },
];

const extraStats = [
  { key: "shots", label: "Shots" },
  { key: "winStreak", label: "Win Streak" },
  { key: "lossStreak", label: "Loss Streak" },
  { key: "matchesPlayed", label: "Matches Played" },
  { key: "wins", label: "Wins" },
  { key: "losses", label: "Losses" },
];

const PlayerStats: React.FC<{ player: Player }> = ({ player }) => (
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
      {player.playerName || player.playerName}
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
          <div style={{ fontSize: 28, fontWeight: 700 }}>
            {player[stat.key as keyof Player]}
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
          <div style={{ fontSize: 18, fontWeight: 600 }}>
            {player[stat.key as keyof Player]}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PlayerStats;
