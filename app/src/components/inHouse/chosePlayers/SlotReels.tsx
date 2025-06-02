import React, { useImperativeHandle, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export interface SlotReelsHandle {
  spinTo: (winnerName: string) => void;
  reset: () => void;
}

interface SlotReelsProps {
  names: string[];
  onSpinEnd: (winner: string) => void;
}

const SlotReels = React.forwardRef<SlotReelsHandle, SlotReelsProps>(
  ({ names, onSpinEnd }, ref) => {
    const [rotation, setRotation] = useState(0);
    const controls = useAnimation();
    const [spinning, setSpinning] = useState(false);

    useImperativeHandle(ref, () => ({
      spinTo: (winnerName: string) => {
        if (spinning || !names.length) return;
        setSpinning(true);

        const playerCount = names.length;
        const degPerName = 360 / playerCount;
        const winnerIdx = names.findIndex((n) => n === winnerName);
        const fullSpins = 4 + Math.floor(Math.random() * 3);
        // Winner at front: rotate so winner is at 0deg
        const targetRotation = 360 * fullSpins + winnerIdx * degPerName;

        controls
          .start({
            rotateX: targetRotation,
            transition: {
              duration: 2.2,
              ease: [0.17, 0.67, 0.83, 0.67],
            },
          })
          .then(() => {
            setRotation(targetRotation % 360);
            setSpinning(false);
            onSpinEnd(winnerName);
          });
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
            names.map((name, i) => (
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
                }}
              >
                {name}
              </div>
            ))
          ) : (
            <div style={{ textAlign: "center", color: "#fff" }}>No Players</div>
          )}
        </motion.div>
      </div>
    );
  }
);

export default SlotReels;
