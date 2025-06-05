import React, { useEffect, useRef, useState } from "react";
import styles from "./css/miniGame.module.css";
import SlotReels, { SlotReelsHandle } from "./SlotReels";
import TeamSidebar from "./teamSidebar";
import Lever from "./lever";

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
  const [mode, setMode] = useState<Mode>("2v2");
  const [picked, setPicked] = useState<string[]>([]);
  const [spinQueue, setSpinQueue] = useState<string[]>([]); // Track the spin queue
  const [notEnoughPopup, setNotEnoughPopup] = useState(false);
  const [currentSpinPlayer, setCurrentSpinPlayer] = useState<string | null>(
    null
  );

  const reelsRef = useRef<SlotReelsHandle>(null);

  // Handle mode change
  const handleModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMode(e.target.value as Mode);
    setPicked([]);
    setWinner(null);
  };

  const requiredPlayers = MODE_PLAYERS[mode];
  const blueCount = requiredPlayers / 2;
  const teamBlue = picked.slice(0, blueCount);
  const teamOrange = picked.slice(blueCount);

  // Lever animation and spin trigger
  const handleLever = () => {
    if (spinning) return;
    if (names.length < requiredPlayers) {
      setNotEnoughPopup(true);
      setTimeout(() => setNotEnoughPopup(false), 1500);
      return;
    }
    setPicked([]);
    setSpinning(true);

    // Pick unique random names for this round
    const available = [...names];
    const queue: string[] = [];
    for (let i = 0; i < requiredPlayers; i++) {
      const idx = Math.floor(Math.random() * available.length);
      queue.push(available[idx]);
      available.splice(idx, 1);
    }
    setSpinQueue(queue);

    // Start the first spin
    setCurrentSpinPlayer(queue[0]);
    reelsRef.current?.spinTo(queue[0]);
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
      const nextWinner = spinQueue[picked.length];
      setTimeout(() => {
        if (nextWinner) {
          setCurrentSpinPlayer(nextWinner);
          reelsRef.current?.spinTo(nextWinner);
        }
      }, 500);
    } else if (picked.length >= requiredPlayers) {
      setSpinning(false);
      setPendingSpin(false);
      setCurrentSpinPlayer(null);
    }
  }, [names, picked, spinning, pendingSpin, spinQueue, requiredPlayers]);

  // Auto-hide winner popup after 1 second
  useEffect(() => {
    if (winner) {
      const timer = setTimeout(() => setWinner(null), 1000);
      return () => clearTimeout(timer);
    }
  }, [winner]);

  return (
    <div
      className={styles.pixelSlotOuter}
      style={{ display: "flex", flexDirection: "row" }}
    >
      {/* Move mode select and pass props */}
      <TeamSidebar
        blue={teamBlue}
        orange={teamOrange}
        mode={mode}
        onModeChange={handleModeChange}
        requiredPlayers={requiredPlayers}
      />

      {/* Main slot machine */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 600,
            position: "relative",
            marginTop: 20,
          }}
        >
          <div className={styles.rlJackpotSign}>JACKPOT</div>
          <div className={styles.SlotBodyWrapper}>
            <div className={styles.SlotBody}>
              <div className={styles.slotReelContainer}>
                <div className={styles.screen}>
                  <div className={styles.slotReelArrows}>
                    <span>▶</span>
                    <span>◀</span>
                  </div>

                  {/* Slot content here */}
                  <SlotReels
                    ref={reelsRef}
                    names={names}
                    onSpinEnd={handleSpinEnd}
                    selectedName={currentSpinPlayer ?? undefined}
                  />
                </div>
              </div>

              {/* button row */}
              <div className={styles.SlotBodyButtons}>
                <div className={styles.buttonRow}>
                  <div
                    className={styles.button3d}
                    style={{
                      background:
                        "linear-gradient(180deg,#ff5a8a 60%,#c8004c 100%)",
                    }}
                  />
                  <div
                    className={styles.button3d}
                    style={{
                      background:
                        "linear-gradient(180deg,#ffe066 60%,#bfa600 100%)",
                    }}
                  />
                  <div
                    className={styles.button3d}
                    style={{
                      background:
                        "linear-gradient(180deg,#7be87b 60%,#1f7a1f 100%)",
                      marginLeft: "auto",
                    }}
                  />
                </div>
              </div>
              {/* Lever inside SlotBody but positioned outside */}
              <Lever disabled={spinning} onPulled={handleLever} />
            </div>
          </div>

          <div className={styles.pixelSlotBase2}>
            <div className={styles.cardSlot} />
            <div className={styles.internalBase}>
              <span style={{ fontSize: "3rem", fontWeight: 700 }}>Custom</span>
              <span style={{ fontSize: "3rem", fontWeight: 700 }}>Teams</span>
            </div>
          </div>
          <div className={styles.pixelSlotBase} />

          {/* Not enough players popup */}
          {notEnoughPopup && (
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 80,
                margin: "0 auto",
                zIndex: 10,
                background: "#ff4444",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1.3rem",
                padding: "18px 32px",
                borderRadius: 12,
                boxShadow: "0 2px 16px #0006",
                textAlign: "center",
                width: 320,
              }}
            >
              Not enough players!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiniGame;
