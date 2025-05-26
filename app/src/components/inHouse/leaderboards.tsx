import React, { useState } from "react";
import PlayerStats from "./playerStats"; // Make sure this path is correct

const leaderboardData = [
  {
    rank: 1,
    name: "PlayerOne",
    playerName: "PlayerOne", // Add this line
    goals: 20,
    saves: 15,
    assists: 10,
    points: 1500,
    shots: 30,
    winStreak: 5,
    lossStreak: 1,
    matchesPlayed: 22,
    wins: 18,
    losses: 4,
  },
  {
    rank: 2,
    name: "GamerGirl",
    playerName: "GamerGirl", // Add this line
    goals: 18,
    saves: 12,
    assists: 14,
    points: 1400,
    shots: 28,
    winStreak: 3,
    lossStreak: 2,
    matchesPlayed: 20,
    wins: 15,
    losses: 5,
  },
  {
    rank: 3,
    name: "NoobMaster",
    playerName: "NoobMaster", // Add this line
    goals: 15,
    saves: 18,
    assists: 9,
    points: 1350,
    shots: 25,
    winStreak: 4,
    lossStreak: 3,
    matchesPlayed: 21,
    wins: 16,
    losses: 5,
  },
  {
    rank: 4,
    name: "ProSlayer",
    playerName: "ProSlayer", // Add this line
    goals: 14,
    saves: 10,
    assists: 12,
    points: 1300,
    shots: 27,
    winStreak: 2,
    lossStreak: 2,
    matchesPlayed: 19,
    wins: 13,
    losses: 6,
  },
  {
    rank: 5,
    name: "ClutchKing",
    playerName: "ClutchKing", // Add this line
    goals: 12,
    saves: 14,
    assists: 11,
    points: 1250,
    shots: 22,
    winStreak: 1,
    lossStreak: 4,
    matchesPlayed: 18,
    wins: 10,
    losses: 8,
  },
];

const Leaderboards: React.FC = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<
    null | (typeof leaderboardData)[0]
  >(null);

  if (selectedPlayer) {
    return (
      <div>
        <button
          style={{
            margin: "2rem auto",
            display: "block",
            padding: "0.5rem 1.5rem",
            borderRadius: 6,
            border: "none",
            background: "#23272f",
            color: "#fff",
            cursor: "pointer",
            fontWeight: 600,
          }}
          onClick={() => setSelectedPlayer(null)}
        >
          ← Back to Leaderboard
        </button>
        <PlayerStats player={selectedPlayer} />
      </div>
    );
  }

  return (
    <div
      style={{
        width: "60%",
        margin: "2rem auto",
        background: "#23272f",
        borderRadius: "12px",
        padding: "2rem",
        color: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        Leaderboard
      </h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #444" }}>
            <th style={{ textAlign: "left", padding: "0.5rem" }}>Position</th>
            <th style={{ textAlign: "left", padding: "0.5rem" }}>Player</th>
            <th style={{ textAlign: "left", padding: "0.5rem" }}>Goals</th>
            <th style={{ textAlign: "left", padding: "0.5rem" }}>Saves</th>
            <th style={{ textAlign: "left", padding: "0.5rem" }}>Assists</th>
            <th style={{ textAlign: "left", padding: "0.5rem" }}>Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((player) => (
            <tr
              key={player.rank}
              style={{ borderBottom: "1px solid #444", cursor: "pointer" }}
              onClick={() => setSelectedPlayer(player)}
            >
              <td style={{ padding: "0.5rem" }}>{player.rank}</td>
              <td
                style={{
                  padding: "0.5rem",
                  color: "#4fd1c5",
                  textDecoration: "underline",
                }}
              >
                {player.name}
              </td>
              <td style={{ padding: "0.5rem" }}>{player.goals}</td>
              <td style={{ padding: "0.5rem" }}>{player.saves}</td>
              <td style={{ padding: "0.5rem" }}>{player.assists}</td>
              <td style={{ padding: "0.5rem" }}>{player.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboards;
