import React, { useEffect } from "react";
import { useParams } from "react-router";

// Components
import Leaderboards from "./leaderboards";
import Games from "./games";
import MatchPrediction from "./matchPrediction";
import ChosePlayers from "./chosePlayers/chosePlayer";
// import Games from "./games"; // Uncomment and create this if you have a Games component
import styles from "./css/inHouse.module.css";

const InHouse: React.FC = () => {
  const { contentName } = useParams();

  useEffect(() => {
    console.log("Content name:", contentName);
  }, [contentName]);

  const isLeaderboards = contentName?.toLowerCase().includes("leaderboard");
  const isGames = contentName?.toLowerCase().includes("game");
  const isPredictions = contentName?.toLowerCase().includes("predictions");
  const isChosePlayers = contentName?.toLowerCase().includes("choseplayers");

  return (
    <div className={styles.wrapper}>
      {isLeaderboards ? (
        <Leaderboards />
      ) : isGames ? (
        <Games />
      ) : isPredictions ? (
        <MatchPrediction />
      ) : isChosePlayers ? (
        <ChosePlayers />
      ) : (
        <>No content</>
      )}
    </div>
  );
};

export default InHouse;
