import React, { useState, useEffect } from "react";
import PlayerStats from "./playerStats"; // Make sure this path is correct

const leaderboardOptions = [
  { label: "1 v 1", id: 1 },
  { label: "2 v 2", id: 2 },
  { label: "3 v 3", id: 3 },
];

const orderOptions = [
  { label: "Goals", value: "goals" },
  { label: "Saves", value: "saves" },
  { label: "Assists", value: "assists" },
  { label: "Shots", value: "shots" },
];

const limitOptions = [10, 25, 50, 75];

const Leaderboards: React.FC = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<any>(null);
  const [leaderboardId, setLeaderboardId] = useState(2);
  const [orderBy, setOrderBy] = useState("goals");
  const [order, setOrder] = useState("desc");
  const [limit, setLimit] = useState(25);
  const [players, setPlayers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `/api/leaderboards/${leaderboardId}/players?orderBy=${orderBy}&order=${order}&limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
        setLoading(false);
      });
  }, [leaderboardId, orderBy, order, limit]);

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
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
        <select
          value={leaderboardId}
          onChange={(e) => setLeaderboardId(Number(e.target.value))}
        >
          {leaderboardOptions.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </select>
        <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
          {orderOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="desc">Desc</option>
          <option value="asc">Asc</option>
        </select>
        <select
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
        >
          {limitOptions.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
      {loading ? (
        <div style={{ textAlign: "center" }}>Loading...</div>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #444" }}>
              <th style={{ textAlign: "left", padding: "0.5rem" }}>#</th>
              <th style={{ textAlign: "left", padding: "0.5rem" }}>Player</th>
              <th style={{ textAlign: "left", padding: "0.5rem" }}>Goals</th>
              <th style={{ textAlign: "left", padding: "0.5rem" }}>Saves</th>
              <th style={{ textAlign: "left", padding: "0.5rem" }}>Assists</th>
              <th style={{ textAlign: "left", padding: "0.5rem" }}>Shots</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, idx) => (
              <tr
                key={player.id}
                style={{ borderBottom: "1px solid #444", cursor: "pointer" }}
                onClick={() => setSelectedPlayer(player)}
              >
                <td style={{ padding: "0.5rem" }}>{idx + 1}</td>
                <td
                  style={{
                    padding: "0.5rem",
                    color: "#4fd1c5",
                    textDecoration: "underline",
                  }}
                >
                  {player.playerName}
                </td>
                <td style={{ padding: "0.5rem" }}>{player.goals}</td>
                <td style={{ padding: "0.5rem" }}>{player.saves}</td>
                <td style={{ padding: "0.5rem" }}>{player.assists}</td>
                <td style={{ padding: "0.5rem" }}>{player.shots}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Leaderboards;
