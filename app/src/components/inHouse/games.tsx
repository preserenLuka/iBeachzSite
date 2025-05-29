import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/games.module.css";
import GameDetails from "./gameDetails";
import { Match } from "../../util/types";

const TEAM_COLORS: Record<string, string> = {
  BLUE: "#308bc7",
  ORANGE: "#ff9933",
};

const Games: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [playerName, setPlayerName] = useState("");
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [selectedMatchId, setSelectedMatchId] = useState<number | null>(null);

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams();
    params.append("page", page.toString());
    if (playerName) params.append("playerName", playerName);
    params.append("order", order);

    fetch(`/api/matches?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.matches)) {
          setMatches(data.matches);
          setHasMore(data.hasMore);
        } else {
          setMatches([]);
          setHasMore(false);
        }
        setLoading(false);
      });
  }, [playerName, order, page]);

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => p + 1);

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
          value={playerName}
          onChange={(e) => {
            setPlayerName(e.target.value);
            setPage(1);
          }}
        />
        <select
          className={styles.select}
          value={order}
          onChange={(e) => {
            setOrder(e.target.value as "asc" | "desc");
            setPage(1);
          }}
        >
          <option value="desc">Duration Desc</option>
          <option value="asc">Duration Asc</option>
        </select>
      </div>
      <div className={styles.gamesList}>
        {loading ? (
          <div className={styles.loading}>Loading...</div>
        ) : matches.length === 0 ? (
          <div className={styles.noMatches}>No matches found.</div>
        ) : (
          <>
            <div className={styles.grid}>
              {Array.isArray(matches) &&
                matches.map((match) => {
                  const bluePlayers = match.playerMatches
                    .filter((pm) => pm.team === "BLUE")
                    .map((pm) => pm.player);
                  const orangePlayers = match.playerMatches
                    .filter((pm) => pm.team === "ORANGE")
                    .map((pm) => pm.player);

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
