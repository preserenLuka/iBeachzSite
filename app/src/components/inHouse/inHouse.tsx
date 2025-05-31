import React, { useEffect } from "react";
import { useParams } from "react-router";

// Components
import Leaderboards from "./leaderboards";
import Games from "./games";
// import Games from "./games"; // Uncomment and create this if you have a Games component
import styles from "./css/inHouse.module.css";

const InHouse: React.FC = () => {
  const { contentName } = useParams();

  useEffect(() => {
    console.log("Content name:", contentName);
  }, [contentName]);

  const isLeaderboards = contentName?.toLowerCase().includes("leaderboard");
  const isGames = contentName?.toLowerCase().includes("game");

  return (
    <div className={styles.wrapper}>
      {isLeaderboards ? (
        <Leaderboards />
      ) : isGames ? (
        <Games />
      ) : (
        <>No content</>
      )}
    </div>
  );
};

export default InHouse;
