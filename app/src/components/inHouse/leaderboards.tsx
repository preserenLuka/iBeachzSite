import React from "react";

const leaderboardData = [
  {
    rank: 1,
    name: "PlayerOne",
    goals: 20,
    saves: 15,
    assists: 10,
    points: 1500,
  },
  {
    rank: 2,
    name: "GamerGirl",
    goals: 18,
    saves: 12,
    assists: 14,
    points: 1400,
  },
  {
    rank: 3,
    name: "NoobMaster",
    goals: 15,
    saves: 18,
    assists: 9,
    points: 1350,
  },
  {
    rank: 4,
    name: "ProSlayer",
    goals: 14,
    saves: 10,
    assists: 12,
    points: 1300,
  },
  {
    rank: 5,
    name: "ClutchKing",
    goals: 12,
    saves: 14,
    assists: 11,
    points: 1250,
  },
];

const Leaderboards: React.FC = () => (
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
    <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Leaderboard</h2>
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
          <tr key={player.rank} style={{ borderBottom: "1px solid #444" }}>
            <td style={{ padding: "0.5rem" }}>{player.rank}</td>
            <td style={{ padding: "0.5rem" }}>{player.name}</td>
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

export default Leaderboards;
