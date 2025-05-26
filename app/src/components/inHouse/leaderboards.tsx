import React, { useState, useEffect } from "react";
import PlayerStats from "./playerStats";
import styles from "../../css/leaderboard.module.css";
import { FaArrowDownShortWide } from "react-icons/fa6";
import { FaArrowUpWideShort } from "react-icons/fa6";

const leaderboardOptions = [
  { label: "1 v 1", id: 0 },
  { label: "2 v 2", id: 1 },
  { label: "3 v 3", id: 2 },
];

const limitOptions = [10, 25, 50, 75];

const columns = [
  { key: "playerName", label: "Player" },
  { key: "goals", label: "Goals" },
  { key: "saves", label: "Saves" },
  { key: "assists", label: "Assists" },
  { key: "shots", label: "Shots" },
];

const Leaderboards: React.FC = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<any>(null);
  const [leaderboardId, setLeaderboardId] = useState(1);
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
        console.log("Fetched players:", data);
        setPlayers(data);
        setLoading(false);
      });
  }, [leaderboardId, orderBy, order, limit]);

  const handleSort = (key: string) => {
    if (orderBy === key) {
      setOrder(order === "desc" ? "asc" : "desc");
    } else {
      setOrderBy(key);
      setOrder("desc");
    }
  };

  if (selectedPlayer) {
    return (
      <div>
        <button
          className={styles.backButton}
          onClick={() => setSelectedPlayer(null)}
        >
          ← Back to Leaderboard
        </button>
        <PlayerStats playerId={selectedPlayer.id} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Leaderboard</h2>
      <div className={styles.topBar}>
        <div /> {/* Empty div to push the select to the right */}
        <select
          className={styles.modeSelect}
          value={leaderboardId}
          onChange={(e) => setLeaderboardId(Number(e.target.value))}
        >
          {leaderboardOptions.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div style={{ minHeight: 300 }}>
        {loading ? (
          <div style={{ textAlign: "center", padding: "2rem" }}>Loading...</div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>#</th>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className={col.key !== "playerName" ? styles.sortable : ""}
                    onClick={
                      col.key !== "playerName"
                        ? () => handleSort(col.key)
                        : undefined
                    }
                    style={{
                      textAlign: col.key === "playerName" ? "left" : "center",
                    }}
                  >
                    {col.label}
                    {orderBy === col.key && (
                      <span className={styles.sortArrow}>
                        {order === "asc" ? (
                          <FaArrowUpWideShort className={styles.arrowIcon} />
                        ) : (
                          <FaArrowDownShortWide className={styles.arrowIcon} />
                        )}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {players.map((player, idx) => (
                <tr key={player.id} onClick={() => setSelectedPlayer(player)}>
                  <td>{idx + 1}</td>
                  <td className={styles.playerName}>{player.playerName}</td>
                  <td>{player.goals}</td>
                  <td>{player.saves}</td>
                  <td>{player.assists}</td>
                  <td>{player.shots}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className={styles.bottomBar}>
        <div /> {/* Empty div to push the select to the right */}
        <select
          className={styles.limitSelect}
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
    </div>
  );
};

export default Leaderboards;
