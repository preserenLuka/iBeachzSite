import React, { useEffect, useState } from "react";
import styles from "./css/games.module.css";
import GameDetails from "./gameDetails";
import { Match } from "../../util/types";
import { API_BASE_URL } from "../../vite-env.d";
import { FaSearch } from "react-icons/fa";

const TEAM_COLORS: Record<string, string> = {
  BLUE: "#308bc7",
  ORANGE: "#ff9933",
};

const Games: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [playerName, setPlayerName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [selectedMatchId, setSelectedMatchId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 3;
    const retryDelay = 2500; // 2.5 seconds

    const fetchData = () => {
      setLoading(true);
      setError(null);
      const params = new URLSearchParams();
      params.append("page", page.toString());
      if (playerName) params.append("playerName", playerName);

      fetch(`${API_BASE_URL}/api/matches?${params.toString()}`)
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data.matches)) {
            setMatches(data.matches);
            setHasMore(data.hasMore);
            setError(null);
            setLoading(false);
          } else {
            if (retryCount < maxRetries) {
              retryCount++;
              setError("API is sleeping, waking up... please wait.");
              setTimeout(fetchData, retryDelay);
            } else {
              setMatches([]);
              setHasMore(false);
              setError("API is waking up, please try again in a few seconds.");
              setLoading(false);
            }
          }
        })
        .catch(() => {
          if (retryCount < maxRetries) {
            retryCount++;
            setError("API is sleeping, waking up... please wait.");
            setTimeout(fetchData, retryDelay);
          } else {
            setMatches([]);
            setHasMore(false);
            setError("API is waking up, please try again in a few seconds.");
            setLoading(false);
          }
        });
    };

    fetchData();
  }, [playerName, page]);

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => p + 1);

  const handleSearch = () => {
    setPlayerName(searchTerm);
    setPage(1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  useEffect(() => {
    const handler = setTimeout(() => {
      setPage(1);
      setPlayerName(searchTerm); // <-- This triggers the API call
    }, 750);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  if (selectedMatchId) {
    return (
      <>
        <div className={styles.backButtonWrapper}>
          <button
            className={styles.pageButton}
            onClick={() => setSelectedMatchId(null)}
          >
            Back to Games
          </button>
        </div>
        <div className={styles.container}>
          <GameDetails matchId={selectedMatchId} />
        </div>
      </>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Games</h2>
      <div className={styles.controls}>
        <input
          className={styles.input}
          type="text"
          placeholder="Filter by player name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className={styles.pageButton} onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>

      <div className={styles.gamesList}>
        {error ? (
          <div className={styles.loading}>{error}</div>
        ) : loading ? (
          <div className={styles.loading}>Loading...</div>
        ) : matches.length === 0 ? (
          <div className={styles.noMatches}>No matches found.</div>
        ) : (
          <>
            <div className={styles.grid}>
              {Array.isArray(matches) &&
                matches.map((match) => {
                  const bluePlayers = Array.isArray(match.playerMatches)
                    ? match.playerMatches
                        .filter((pm) => pm.team === "BLUE")
                        .map((pm) => pm.player)
                    : [];
                  const orangePlayers = Array.isArray(match.playerMatches)
                    ? match.playerMatches
                        .filter((pm) => pm.team === "ORANGE")
                        .map((pm) => pm.player)
                    : [];

                  const winningTeam = match.winner;
                  const losingTeam = winningTeam === "BLUE" ? "ORANGE" : "BLUE";
                  const winningPlayers =
                    winningTeam === "BLUE" ? bluePlayers : orangePlayers;
                  const losingPlayers =
                    winningTeam === "BLUE" ? orangePlayers : bluePlayers;

                  const min = Math.floor(match.duration / 60);
                  const sec = match.duration % 60;
                  const durationStr = `${min}min ${sec}sec`;

                  const gradient = `linear-gradient(
                    120deg,
                    ${TEAM_COLORS[winningTeam]} 0%,
                    var(--background) 38%,
                    var(--background) 62%,
                    ${TEAM_COLORS[losingTeam]} 100%
                  )`;

                  return (
                    <div
                      className={styles.card}
                      key={match.id}
                      style={{ background: gradient, cursor: "pointer" }}
                      onClick={() => setSelectedMatchId(match.id)}
                    >
                      <div className={styles.cardLeft}>
                        {winningPlayers.map((p, i) => (
                          <div className={styles.playerName} key={i}>
                            {p.playerName}
                          </div>
                        ))}
                      </div>
                      <div className={styles.cardMiddle}>
                        <div className={styles.vs}>VS</div>
                        <div className={styles.score}>
                          {match.blueScore} - {match.orangeScore}
                        </div>
                        <div className={styles.duration}>{durationStr}</div>
                      </div>
                      <div className={styles.cardRight}>
                        {losingPlayers.map((p, i) => (
                          <div className={styles.playerName} key={i}>
                            {p.playerName}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className={styles.pagination}>
              <button
                className={styles.pageButton}
                onClick={handlePrev}
                disabled={page === 1}
              >
                Previous
              </button>
              <span className={styles.pageNumber}>Page {page}</span>
              <button
                className={styles.pageButton}
                onClick={handleNext}
                disabled={!hasMore}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Games;
