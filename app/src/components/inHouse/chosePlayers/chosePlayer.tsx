import React, { useState } from "react";
import styles from "./css/chosePlayer.module.css";
import MiniGame from "./miniGame";
import { parseNames } from "../../../util/parseNames";

const ChosePlayer: React.FC = () => {
  const [playerNames, setPlayerNames] = useState<string[]>([]);
  const [textValue, setTextValue] = useState("");

  const handleAddNames = () => {
    const newNames = parseNames(textValue); // Use your parsing function
    setPlayerNames((prev) => [...prev, ...newNames]);
    setTextValue("");
  };

  const removeName = (nameToRemove: string) => {
    setPlayerNames((prev) => prev.filter((name) => name !== nameToRemove));
  };

  return (
    <div className={styles.container}>
      {/* Here */}
      {/* Left side: mini-game placeholder */}
      <div className={styles.gameArea}>
        <MiniGame names={playerNames} onRemove={removeName} />
      </div>

      {/* Right side: usernames + text input */}
      <div className={styles.sidePanel}>
        <div className={styles.userNamesBox}>
          <h3>Player Names</h3>
          {playerNames.map((name) => (
            <div key={name} className={styles.nameItem}>
              {name}
              <button
                type="button"
                className={styles.deleteButton}
                onClick={() => removeName(name)}
              >
                x
              </button>
            </div>
          ))}
        </div>

        <div className={styles.inputBox}>
          <textarea
            className={styles.playerTextArea}
            placeholder="Enter player names…"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
          <button
            type="button"
            className={styles.addButton}
            onClick={handleAddNames}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChosePlayer;
