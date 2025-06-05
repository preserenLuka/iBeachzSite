import React, { useImperativeHandle, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./css/slotReel.module.css";

export interface SlotReelsHandle {
  spinTo: (winnerName: string) => void;
  reset: () => void;
}

interface SlotReelsProps {
  names: string[];
  onSpinEnd: (winner: string) => void;
  selectedName?: string;
}

const SlotReels = React.forwardRef<SlotReelsHandle, SlotReelsProps>(
  ({ names, onSpinEnd }, ref) => {
    const controls = useAnimation();
    const [spinning, setSpinning] = useState(false);
    const [justLanded, setJustLanded] = useState<string | null>(null);

    useImperativeHandle(ref, () => ({
      spinTo: async (winnerName: string) => {
        if (spinning || !names.length) return;
        setSpinning(true);
        setJustLanded(null);

        const playerCount = names.length;
        const degPerName = 360 / playerCount;
        const winnerIdx = names.findIndex((n) => n === winnerName);
        const fullSpins = 3 + Math.floor(Math.random() * 2); // Slightly less for more drama
        const fastRotation = 360 * fullSpins;
        const slowRotation = 360 + winnerIdx * degPerName;
        const targetRotation = fastRotation + slowRotation;

        // Fast spin
        await controls.start({
          rotateX: fastRotation,
          transition: {
            duration: 1.2,
            ease: [0.17, 0.67, 0.83, 0.67],
          },
        });
        // Slow spin to winner
        await controls.start({
          rotateX: targetRotation,
          transition: {
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          },
        });

        setSpinning(false);
        setJustLanded(winnerName);
        setTimeout(() => {
          setJustLanded(null);
          onSpinEnd(winnerName);
        }, 1000); // 1 second delay before removing
      },
      reset: () => {
        controls.set({ rotateX: 0 });
      },
    }));

    const radius = 120;
    const degPerName = names.length ? 360 / names.length : 0;

    return (
      <div className={styles.slotReelContainer}>
        {/* Side arrows overlay */}

        <motion.div
          className={styles.slotReelMotion}
          animate={controls}
          initial={{ rotateX: 0 }}
        >
          {names.length > 0 ? (
            names.map((name, i) => {
              // Only glow the winner after spin, not while spinning
              const isWinner = !spinning && justLanded === name;
              return (
                <div
                  key={name + i}
                  className={`${styles.slotReelName} ${
                    isWinner ? styles.slotReelWinner : ""
                  }`}
                  style={{
                    top: "50%",
                    transform: `rotateX(${
                      -i * degPerName
                    }deg) translateZ(${radius}px)`,
                  }}
                  title={name}
                >
                  {name}
                </div>
              );
            })
          ) : (
            <div style={{ textAlign: "center", color: "#fff" }}>No Players</div>
          )}
        </motion.div>
      </div>
    );
  }
);

export default SlotReels;
