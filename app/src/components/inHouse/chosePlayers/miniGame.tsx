import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./css/miniGame.module.css";
import SlotReels, { SlotReelsHandle } from "./SlotReels";
import TeamSidebar from "./teamSidebar";
import Lever from "./Lever";

interface MiniGameProps {
  names: string[];
  onRemove: (name: string) => void;
}

type Mode = "1v1" | "2v2" | "3v3";

const MODE_PLAYERS: Record<Mode, number> = {
  "1v1": 2,
  "2v2": 4,
  "3v3": 6,
};

const MiniGame: React.FC<MiniGameProps> = ({ names, onRemove }) => {
  const [winner, setWinner] = useState<string | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [pendingSpin, setPendingSpin] = useState(false);
  const [leverPhase, setLeverPhase] = useState<
    | "idle"
    | "shaftUpCollapse"
    | "shaftDownExtend"
    | "shaftDownCollapse"
    | "shaftUpExtend"
  >("idle");
  const [mode, setMode] = useState<Mode>("2v2");
  const [picked, setPicked] = useState<string[]>([]);
  const [spinQueue, setSpinQueue] = useState<string[]>([]); // Track the spin queue

  const reelsRef = useRef<SlotReelsHandle>(null);

  // Handle mode change
  const handleModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMode(e.target.value as Mode);
    setPicked([]);
    setWinner(null);
  };

  const requiredPlayers = MODE_PLAYERS[mode];

  // Lever animation and spin trigger
  const handleLever = () => {
    if (spinning || names.length < requiredPlayers) return;
    setLeverPhase("shaftUpCollapse");
    setTimeout(() => setLeverPhase("shaftDownExtend"), 200);
    setTimeout(() => setLeverPhase("shaftDownCollapse"), 400);
    setTimeout(() => setLeverPhase("shaftUpExtend"), 600);
    setTimeout(() => setLeverPhase("idle"), 800);
    // Start spinning after lever animation
    setTimeout(() => {
      setPicked([]);
      setSpinning(true);
      // If you want a random spin, pick a random name and use spinTo
      const randomName = names[Math.floor(Math.random() * names.length)];
      reelsRef.current?.spinTo(randomName);
    }, 800);
  };

  // Handle each spin end
  const handleSpinEnd = (winner: string) => {
    console.log("Spin ended, winner:", winner);
    setPicked((prev) => [...prev, winner]);
    setPendingSpin(true);
    onRemove(winner);
  };

  // Watch for changes in picked and names to trigger next spin
  useEffect(() => {
    if (!spinning) return;
    if (picked.length < requiredPlayers && pendingSpin) {
      setPendingSpin(false);
      // Get the next winner from your spinQueue
      const nextWinner = spinQueue[picked.length];
      setTimeout(() => {
        if (nextWinner) reelsRef.current?.spinTo(nextWinner);
      }, 500);
    } else if (picked.length >= requiredPlayers) {
      setSpinning(false);
      setPendingSpin(false);
    }
  }, [names, picked, spinning, pendingSpin, spinQueue, requiredPlayers]);

  // Auto-hide winner popup after 1 second
  useEffect(() => {
    if (winner) {
      const timer = setTimeout(() => setWinner(null), 1000);
      return () => clearTimeout(timer);
    }
  }, [winner]);

  // Determine team compositions
  const blueCount = MODE_PLAYERS[mode] / 2;
  const teamBlue = picked.slice(0, blueCount);
  const teamOrange = picked.slice(blueCount);

  return (
    <div
      className={styles.pixelSlotOuter}
      style={{ display: "flex", flexDirection: "row" }}
    >
      {/* Teams sidebar */}
      <TeamSidebar blue={teamBlue} orange={teamOrange} />

      {/* Main slot machine */}
      <div style={{ flex: 1 }}>
        {/* Dropdown for mode */}
        <div style={{ marginBottom: 16, textAlign: "center" }}>
          <label>
            Mode:{" "}
            <select value={mode} onChange={handleModeChange}>
              <option value="1v1">1v1</option>
              <option value="2v2">2v2</option>
              <option value="3v3">3v3</option>
            </select>
          </label>
        </div>
        <div className={styles.rlJackpotSign}>JACKPOT</div>
        <div className={styles.SlotBodyWrapper}>
          <div className={styles.SlotBody}>
            <SlotReels ref={reelsRef} names={names} onSpinEnd={handleSpinEnd} />

            {/* Lever inside SlotBody but positioned outside */}
            <Lever
              disabled={spinning || names.length < MODE_PLAYERS[mode]}
              onPulled={handleLever}
            />
          </div>
        </div>

        <div className={styles.pixelSlotBase}>
          <div className={styles.pixelLightsRow}>
            {[...Array(5)].map((_, i) => (
              <div key={i} className={styles.pixelLight} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniGame;
