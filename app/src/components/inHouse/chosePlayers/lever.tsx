import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./css/miniGame.module.css";

type LeverPhase =
  | "idle"
  | "shaftUpCollapse"
  | "shaftDownExtend"
  | "shaftDownCollapse"
  | "shaftUpExtend";

interface LeverProps {
  disabled?: boolean;
  onPulled: () => void;
}

const Lever: React.FC<LeverProps> = ({ disabled, onPulled }) => {
  const [leverPhase, setLeverPhase] = useState<LeverPhase>("idle");

  const handleClick = () => {
    if (disabled) return;
    setLeverPhase("shaftUpCollapse");
    setTimeout(() => setLeverPhase("shaftDownExtend"), 200);
    setTimeout(() => setLeverPhase("shaftDownCollapse"), 400);
    setTimeout(() => setLeverPhase("shaftUpExtend"), 600);
    setTimeout(() => setLeverPhase("idle"), 800);
    setTimeout(() => onPulled(), 800); // Notify parent after animation
  };

  return (
    <div className={styles.pixelLeverBase}>
      <motion.div
        className={styles.pixelLever}
        onClick={handleClick}
        tabIndex={0}
        role="button"
        aria-label="Pull lever to spin"
        style={{
          pointerEvents: disabled ? "none" : "auto",
          position: "relative",
          height: "160px",
          width: "20px",
          top: -125,
        }}
      >
        {/* Upward shaft */}
        <motion.div
          className={styles.pixelLeverShaftUp}
          animate={
            leverPhase === "shaftUpCollapse"
              ? { height: 0 }
              : leverPhase === "shaftUpExtend" || leverPhase === "idle"
              ? { height: 40 }
              : {}
          }
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            bottom: 10,
            right: -6,
            position: "absolute",
            width: "6px",
            backgroundColor: "gray",
            transformOrigin: "bottom center",
          }}
        />

        {/* Downward shaft */}
        <motion.div
          className={styles.pixelLeverShaftDown}
          animate={
            leverPhase === "shaftDownExtend"
              ? { height: 40 }
              : leverPhase === "shaftDownCollapse" || leverPhase === "idle"
              ? { height: 0 }
              : {}
          }
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            rotate: "180deg",
            bottom: 10,
            right: -6,
            position: "absolute",
            width: "6px",
            backgroundColor: "gray",
            transformOrigin: "bottom center",
          }}
        />

        {/* Knob */}
        <motion.div
          className={styles.pixelLeverKnob}
          animate={
            leverPhase === "shaftUpCollapse"
              ? { y: 40 }
              : leverPhase === "shaftDownExtend"
              ? { y: 90 }
              : leverPhase === "shaftDownCollapse"
              ? { y: 40 }
              : leverPhase === "shaftUpExtend"
              ? { y: 0 }
              : {}
          }
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            position: "absolute",
            right: -13.5,
            bottom: 40,
            width: 20,
            height: 20,
            borderRadius: "50%",
            backgroundColor: "red",
          }}
        />
      </motion.div>
    </div>
  );
};

export default Lever;
