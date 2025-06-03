import React, { useImperativeHandle, useState } from "react";
import { motion, useAnimation } from "framer-motion";

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
  ({ names, onSpinEnd, selectedName }, ref) => {
    const [rotation, setRotation] = useState(0);
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

        setRotation(targetRotation % 360);
        setSpinning(false);
        setJustLanded(winnerName);
        setTimeout(() => {
          setJustLanded(null);
          onSpinEnd(winnerName);
        }, 1000); // 1 second delay before removing
      },
      reset: () => {
        setRotation(0);
        controls.set({ rotateX: 0 });
      },
    }));

    const radius = 120;
    const degPerName = names.length ? 360 / names.length : 0;

    return (
      <div
        style={{
          width: 320,
          height: 200,
          overflow: "hidden",
          position: "relative",
          margin: "0 auto",
          background: "#111",
          borderRadius: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Side arrows overlay */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            pointerEvents: "none",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "0 18px",
            fontSize: "2.2rem",
            color: "#0ff",
            fontWeight: "bold",
            textShadow: "0 0 8px #0ff8",
            opacity: 0.85,
          }}
        >
          <span>▶</span>
          <span>◀</span>
        </div>
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
            willChange: "transform",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
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
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: "50%",
                    transform: `rotateX(${
                      -i * degPerName
                    }deg) translateZ(${radius}px)`,
                    textAlign: "center",
                    fontSize: "1.5rem",
                    color: "#fff",
                    width: "100%",
                    pointerEvents: "none",
                    backfaceVisibility: "hidden",
                    fontFamily:
                      "Orbitron, 'Press Start 2P', monospace, sans-serif",
                    fontWeight: 700,
                    textShadow: "0 2px 8px #0ff8ff88, 0 0 8px #ff993388",
                    letterSpacing: "1px",
                    userSelect: "none",
                    border: isWinner ? "3px solid #0ff" : undefined,
                    background: isWinner ? "rgba(0,255,255,0.15)" : undefined,
                    borderRadius: isWinner ? "8px" : undefined,
                    boxShadow: isWinner ? "0 0 16px #0ff8" : undefined,
                    transition: "all 0.2s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
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
