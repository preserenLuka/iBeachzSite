import React from "react";

// Example notes data (simulate API response)
const exampleNotes = [
  { date: "2024-05-01", note: "Worked on positioning and rotations." },
  { date: "2024-05-10", note: "Needs to improve boost management." },
  { date: "2024-05-15", note: "Great progress on aerials!" },
];

interface PlayersNotesProps {
  playerName: string;
  isNew?: boolean;
  onBack: () => void;
}

const PlayersNotes: React.FC<PlayersNotesProps> = ({
  playerName,
  isNew,
  onBack,
}) => {
  // In a real app, fetch notes for playerName here

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
      <button
        onClick={onBack}
        style={{
          marginBottom: "1rem",
          background: "#3b82f6",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          padding: "0.5rem 1rem",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        ← Back
      </button>
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        {isNew ? `Create Notes for "${playerName}"` : `Notes for ${playerName}`}
      </h2>
      {isNew ? (
        <textarea
          placeholder="Write your notes here..."
          style={{
            width: "100%",
            minHeight: "120px",
            padding: "0.5rem",
            borderRadius: 6,
            border: "1px solid #444",
            background: "#181a20",
            color: "#fff",
          }}
        />
      ) : (
        <div>
          {exampleNotes.map((note, idx) => (
            <div
              key={idx}
              style={{
                padding: "0.5rem 0",
                borderBottom:
                  idx !== exampleNotes.length - 1 ? "1px solid #444" : "none",
              }}
            >
              <div style={{ fontSize: "0.95rem", color: "#aaa" }}>
                {note.date}
              </div>
              <div style={{ marginTop: "0.2rem" }}>{note.note}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlayersNotes;
