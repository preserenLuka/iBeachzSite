import React from "react";

interface TeamSidebarProps {
  blue: string[];
  orange: string[];
}

const TeamSidebar: React.FC<TeamSidebarProps> = ({ blue, orange }) => (
  <div
    style={{
      width: 180,
      marginRight: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <div style={{ marginBottom: 24 }}>
      <div style={{ color: "#3af", fontWeight: "bold", marginBottom: 8 }}>
        Blue Team
      </div>
      {blue.length === 0 ? (
        <div style={{ opacity: 0.5 }}>No players</div>
      ) : (
        blue.map((n, i) => <div key={n + i}>{n}</div>)
      )}
    </div>
    <div>
      <div style={{ color: "#fa3", fontWeight: "bold", marginBottom: 8 }}>
        Orange Team
      </div>
      {orange.length === 0 ? (
        <div style={{ opacity: 0.5 }}>No players</div>
      ) : (
        orange.map((n, i) => <div key={n + i}>{n}</div>)
      )}
    </div>
  </div>
);

export default TeamSidebar;
