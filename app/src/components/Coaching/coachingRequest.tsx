import React from "react";

const CoachingRequest: React.FC = () => (
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
      Coaching Request
    </h2>
    <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <input
        placeholder="Name"
        style={{ padding: "0.5rem", borderRadius: 6, border: "1px solid #444" }}
      />
      <input
        placeholder="Surname"
        style={{ padding: "0.5rem", borderRadius: 6, border: "1px solid #444" }}
      />
      <input
        placeholder="Discord Name"
        style={{ padding: "0.5rem", borderRadius: 6, border: "1px solid #444" }}
      />
      <input
        placeholder="Rank"
        style={{ padding: "0.5rem", borderRadius: 6, border: "1px solid #444" }}
      />
      <textarea
        placeholder="What do you want to improve?"
        style={{ padding: "0.5rem", borderRadius: 6, border: "1px solid #444" }}
      />
      <button
        type="submit"
        style={{
          padding: "0.7rem",
          borderRadius: 6,
          background: "#3b82f6",
          color: "#fff",
          border: "none",
          fontWeight: "bold",
        }}
      >
        Submit Request
      </button>
    </form>
  </div>
);

export default CoachingRequest;
