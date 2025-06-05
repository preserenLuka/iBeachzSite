import React, { useEffect, useState } from "react";
import styles from "./css/gameDetails.module.css";
import { API_BASE_URL } from "../../vite-env.d";

interface Player {
  playerName: string;
  goals: number;
  assists: number;
  saves: number;
  shots: number;
  [key: string]: any;
}

interface PlayerMatch {
  team: "BLUE" | "ORANGE";
  goals: number;
  assists: number;
  saves: number;
  shots: number;
  points: number;
  player: Player;
}

interface Match {
  id: number;
  matchTime: string;
  duration: number;
  blueScore: number;
  orangeScore: number;
  winner: "BLUE" | "ORANGE";
  playerMatches: PlayerMatch[];
}

interface GameDetailsProps {
  matchId: number;
}

const TEAM_COLORS: Record<string, string> = {
  BLUE: "#308bc7",
  ORANGE: "#ff9933",
};

const GameDetails: React.FC<GameDetailsProps> = ({ matchId }) => {
  const [match, setMatch] = useState<Match | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_BASE_URL}/api/match/${matchId}`)
      .then((res) => res.json())
      .then((data) => {
        setMatch(data);
        setLoading(false);
        console.log("Match details fetched:", data);
      });
  }, [matchId]);

  if (loading || !match) {
    return <div className={styles.loading}>Loading...</div>;
  }

  const winningTeam = match.winner;
  const losingTeam = winningTeam === "BLUE" ? "ORANGE" : "BLUE";
  const playerMatches = Array.isArray(match.playerMatches)
    ? match.playerMatches
    : [];
  const winningPlayers = playerMatches.filter((pm) => pm.team === winningTeam);
  const losingPlayers = playerMatches.filter((pm) => pm.team === losingTeam);

  const min = Math.floor(match.duration / 60);
  const sec = match.duration % 60;
  const durationStr = `${min}min ${sec}sec`;

  return (
    <div className={styles.outerContainer}>
      <div className={styles.playersColumn} style={{ alignItems: "flex-end" }}>
        {winningPlayers.map((pm, i) => (
          <div className={styles.playerCard} key={i}>
            <div
              className={styles.playerName}
              style={{ color: TEAM_COLORS[winningTeam] }}
            >
              {pm.player.playerName}
            </div>
            <div className={styles.playerStats}>
              <div>Goals: {pm.goals}</div>
              <div>Assists: {pm.assists}</div>
              <div>Saves: {pm.saves}</div>
              <div>Shots: {pm.shots}</div>
              <div>Points: {pm.points}</div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={styles.matchSquare}
        style={{ border: `3px solid ${TEAM_COLORS[winningTeam]}` }}
      >
        <div className={styles.matchWinner}>
          <b>Winner:</b>{" "}
          <span style={{ color: TEAM_COLORS[winningTeam] }}>{winningTeam}</span>
        </div>
        <div className={styles.matchTitle}>
          <b>
            {match.blueScore} - {match.orangeScore}
          </b>
        </div>
        <div className={styles.matchDuration}>{durationStr}</div>
      </div>
      <div
        className={styles.playersColumn}
        style={{ alignItems: "flex-start" }}
      >
        {losingPlayers.map((pm, i) => (
          <div className={styles.playerCard} key={i}>
            <div
              className={styles.playerName}
              style={{ color: TEAM_COLORS[losingTeam] }}
            >
              {pm.player.playerName}
            </div>
            <div className={styles.playerStats}>
              <div>Goals: {pm.goals}</div>
              <div>Assists: {pm.assists}</div>
              <div>Saves: {pm.saves}</div>
              <div>Shots: {pm.shots}</div>
              <div>Points: {pm.points}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameDetails;
