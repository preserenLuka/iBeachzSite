import React, { useState, useEffect, useRef } from "react";
import styles from "./css/leaderboard.module.css";
import { FaArrowDownShortWide, FaArrowUpWideShort } from "react-icons/fa6";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { IoCheckboxOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { API_BASE_URL } from "../../vite-env.d";
import PlayerStats from "./playerStats";

const leaderboardOptions = [
  { label: "1 v 1", id: 0 },
  { label: "2 v 2", id: 1 },
  { label: "3 v 3", id: 2 },
];

const statOptions = [
  { key: "goals", label: "Goals" },
  { key: "saves", label: "Saves" },
  { key: "assists", label: "Assists" },
  { key: "shots", label: "Shots" },
  { key: "wins", label: "Wins" },
  { key: "losses", label: "Losses" },
  { key: "matchesPlayed", label: "Matches Played" },
];

const Leaderboards: React.FC = () => {
  const [leaderboardId, setLeaderboardId] = useState(1);
  const [selectedStats, setSelectedStats] = useState<string[]>([
    "wins",
    "losses",
    "goals",
    "saves",
  ]);
  const [selectedPlayer, setSelectedPlayer] = useState<any>(null);
  const [orderBy, setOrderBy] = useState("wins");
  const [order, setOrder] = useState("desc");
  const [limit] = useState(15);
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState(""); // Actual search filter used in API calls

  // Pagination
  const [page, setPage] = useState(1);
  const [totalEntries, setTotalEntries] = useState(0);

  const [players, setPlayers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  const handleSort = (key: string) => {
    if (orderBy === key) {
      setOrder(order === "desc" ? "asc" : "desc");
    } else {
      setOrderBy(key);
      setOrder("desc");
    }
  };

  const handleStatToggle = (statKey: string) => {
    setSelectedStats((prev) =>
      prev.includes(statKey)
        ? prev.filter((k) => k !== statKey)
        : [...prev, statKey]
    );
    // If removing the current sort field, switch to something else
    if (orderBy === statKey && selectedStats.length === 1) {
      setOrderBy("wins");
    }
  };

  // Handle the new search button or Enter press
  const handleSearch = () => {
    setPage(1);
    setSearch(searchTerm);
  };

  // Pagination
  const handlePrevPage = () => setPage((p) => Math.max(1, p - 1));
  const handleNextPage = () => setPage((p) => p + 1);

  // Fetching data
  useEffect(() => {
    setLoading(true);
    const baseUrl = `${API_BASE_URL}/api/leaderboards/${leaderboardId}/players`;
    const params = new URLSearchParams({
      orderBy,
      order,
      limit: limit.toString(),
      page: page.toString(),
    });
    if (search) {
      params.append("search", search);
    }

    fetch(`${baseUrl}?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.players)) {
          setPlayers(data.players);
          setTotalEntries(data.totalEntries || 0);
          setError(null);
        } else {
          setPlayers([]);
          setTotalEntries(0);
          setError("API is waking up, please try again in a few seconds.");
        }
        setLoading(false);
      })
      .catch(() => {
        setPlayers([]);
        setTotalEntries(0);
        setError("API is waking up, please try again in a few seconds.");
        setLoading(false);
      });
  }, [leaderboardId, orderBy, order, limit, page, search]);

  const totalPages = Math.ceil(totalEntries / limit);

  if (selectedPlayer) {
    return (
      <div>
        <div className={styles.backButtonWrapper}>
          <button
            className={styles.pageButton}
            onClick={() => setSelectedPlayer(null)}
          >
            Back to Games
          </button>
        </div>
        <PlayerStats playerId={selectedPlayer.id} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        {/* Multi-select dropdown */}
        <div className={styles.dropdownContainer} ref={dropdownRef}>
          <button
            className={styles.dropdownButton}
            onClick={() => setDropdownOpen((open) => !open)}
            type="button"
          >
            Select Stats
          </button>
          {dropdownOpen && (
            <div className={styles.dropdownMenu}>
              {statOptions.map((option) => {
                const checked = selectedStats.includes(option.key);
                return (
                  <label key={option.key} className={styles.dropdownItem}>
                    <span
                      onClick={() => handleStatToggle(option.key)}
                      style={{
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        marginRight: 10,
                      }}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === " " || e.key === "Enter")
                          handleStatToggle(option.key);
                      }}
                      aria-checked={checked}
                      role="checkbox"
                    >
                      {checked ? (
                        <IoCheckboxOutline size={22} color="var(--primary)" />
                      ) : (
                        <RiCheckboxBlankLine size={22} color="var(--primary)" />
                      )}
                    </span>
                    {option.label}
                    {/* The hidden checkbox for accessibility */}
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => handleStatToggle(option.key)}
                      style={{ display: "none" }}
                      tabIndex={-1}
                    />
                  </label>
                );
              })}
            </div>
          )}
        </div>

        {/* Mode select */}
        <select
          className={styles.modeSelect}
          value={leaderboardId}
          onChange={(e) => {
            setLeaderboardId(Number(e.target.value));
            setPage(1);
          }}
        >
          {leaderboardOptions.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </select>
        <h2 className={styles.title}>Leaderboard</h2>

        {/* Search bar, similar to the one in games */}
        <div className={styles.SearchControls} style={{ marginLeft: "auto" }}>
          <input
            className={styles.input}
            type="text"
            placeholder="Filter by player name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          <button className={styles.pageButton} onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>
      </div>

      <div style={{ minHeight: 300 }}>
        {loading ? (
          <div style={{ textAlign: "center", padding: "2rem" }}>Loading...</div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>#</th>
                  <th style={{ textAlign: "center" }}>Player</th>
                  {selectedStats.map((stat) => {
                    const label =
                      statOptions.find((s) => s.key === stat)?.label || stat;
                    return (
                      <th
                        key={stat}
                        className={styles.sortable}
                        onClick={() => handleSort(stat)}
                      >
                        {label}
                        {orderBy === stat && (
                          <span className={styles.sortArrow}>
                            {order === "asc" ? (
                              <FaArrowUpWideShort
                                className={styles.arrowIcon}
                              />
                            ) : (
                              <FaArrowDownShortWide
                                className={styles.arrowIcon}
                              />
                            )}
                          </span>
                        )}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {players.map((player, idx) => (
                  <tr key={player.id} onClick={() => setSelectedPlayer(player)}>
                    <td>{(page - 1) * limit + idx + 1}</td>
                    <td className={styles.playerName}>{player.playerName}</td>
                    {selectedStats.map((stat) => (
                      <td key={stat}>{player[stat]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {error && (
        <div style={{ color: "#ff4444", textAlign: "center", margin: "1rem" }}>
          {error}
        </div>
      )}

      <div className={styles.bottomBar}>
        {/* Pagination buttons in the center */}
        <div className={styles.paginationControls}>
          <button
            className={styles.pageButton}
            onClick={handlePrevPage}
            disabled={page <= 1}
          >
            Previous
          </button>
          <span className={styles.pageNumber}>Page {page}</span>
          <button
            className={styles.pageButton}
            onClick={handleNextPage}
            disabled={page >= totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leaderboards;
