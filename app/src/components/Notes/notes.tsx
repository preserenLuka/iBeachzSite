import React, { useState } from "react";
import PlayersNotes from "./playersNotes";

// Example player names (simulate API data)
const playerNames = [
  "PlayerOne",
  "GamerGirl",
  "NoobMaster",
  "ProSlayer",
  "ClutchKing",
];

const Notes: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const [creatingNew, setCreatingNew] = useState(false);

  // Filter player names based on search input
  const filteredPlayers = playerNames.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  if (selectedPlayer || creatingNew) {
    return (
      <PlayersNotes
        playerName={selectedPlayer || search || "New Player"}
        isNew={creatingNew}
        onBack={() => {
          setSelectedPlayer(null);
          setCreatingNew(false);
          setSearch("");
        }}
      />
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
        Player Notes
      </h2>
      <input
        type="text"
        placeholder="Search player..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCreatingNew(false);
        }}
        style={{
          width: "100%",
          padding: "0.5rem",
          borderRadius: 6,
          border: "1px solid #444",
          marginBottom: "0.5rem",
          background: "#181a20",
          color: "#fff",
        }}
      />
      <div
        style={{
          background: "#181a20",
          borderRadius: 6,
          boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          marginTop: "0.5rem",
        }}
      >
        {/* Option to create new player notes always at the top */}
        <div
          style={{
            padding: "0.5rem",
            borderBottom: filteredPlayers.length ? "1px solid #444" : "none",
            cursor: "pointer",
            color: "#3b82f6",
            fontWeight: "bold",
          }}
          onClick={() => setCreatingNew(true)}
        >
          + Create new player notes
        </div>
        {/* Show filtered player options */}
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((name) => (
            <div
              key={name}
              style={{
                padding: "0.5rem",
                borderBottom: "1px solid #444",
                cursor: "pointer",
              }}
              onClick={() => setSelectedPlayer(name)}
            >
              {name}
            </div>
          ))
        ) : (
          <div style={{ padding: "0.5rem", color: "#aaa" }}>
            No players found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;
