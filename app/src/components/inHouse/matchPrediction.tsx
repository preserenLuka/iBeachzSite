import React from "react";
import styles from "./matchPrediction.module.css";

const MatchPrediction: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Match Prediction</div>
      <div className={styles.subtitle}>Coming Soon!</div>
      <div className={styles.note}>
        This feature isn&apos;t ready yet.
        <br />
        Please check back later!
      </div>
    </div>
  );
};

export default MatchPrediction;
