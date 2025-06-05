import React from "react";

interface TeamSidebarProps {
  blue: string[];
  orange: string[];
  mode: string;
  onModeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  requiredPlayers: number;
}

const playerStyle: React.CSSProperties = {
  padding: "10px 0",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontSize: "1rem",
  textAlign: "center",
};

const placeholderStyle: React.CSSProperties = {
  ...playerStyle,
  opacity: 0.4,
  fontStyle: "italic",
};

export const TeamSidebar: React.FC<TeamSidebarProps> = ({
  blue,
  orange,
  mode,
  onModeChange,
  requiredPlayers,
}) => {
  const spots = requiredPlayers / 2;

  return (
    <>
      {/* Mode select - absolutely positioned at the top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "18%",
          textAlign: "center",
          zIndex: 2,
          background: "#308bc7",
          padding: "10px 0 8px 0",
          borderRadius: "8px 8px 0 0",
        }}
      >
        <label>
          Mode:{" "}
          <select value={mode} onChange={onModeChange}>
            <option value="1v1">1v1</option>
            <option value="2v2">2v2</option>
            <option value="3v3">3v3</option>
          </select>
        </label>
      </div>
      <div
        style={{
          width: 130,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          marginLeft: 42,
          position: "relative", // Make relative for absolute children
          minHeight: 320,
        }}
      >
        {/* Add top padding so content doesn't overlap selector */}
        <div style={{ paddingTop: 48 }}>
          {/* Blue Team */}
          <div style={{ marginBottom: 24 }}>
            <div
              style={{
                color: "#3af",
                fontWeight: "bold",
                marginBottom: 8,
                fontSize: "1.2rem",
                textAlign: "center",
              }}
            >
              Blue Team
            </div>
            {[...Array(spots)].map((_, i) =>
              blue[i] ? (
                <div key={blue[i] + i} style={playerStyle} title={blue[i]}>
                  {blue[i]}
                </div>
              ) : (
                <div key={`blue-empty-${i}`} style={placeholderStyle}>
                  Reserved
                </div>
              )
            )}
          </div>
          {/* Orange Team */}
          <div>
            <div
              style={{
                color: "#fa3",
                fontWeight: "bold",
                marginBottom: 8,
                fontSize: "1.2rem",
                textAlign: "center",
              }}
            >
              Orange Team
            </div>
            {[...Array(spots)].map((_, i) =>
              orange[i] ? (
                <div key={orange[i] + i} style={playerStyle} title={orange[i]}>
                  {orange[i]}
                </div>
              ) : (
                <div key={`orange-empty-${i}`} style={placeholderStyle}>
                  Reserved
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSidebar;
