import React from "react";
import DefenseContent from "./fundamentals/defense"; // Uncapitalized
import CounterAttack from "./fundamentals/counterAttack"; // Uncapitalized
import Attack from "./fundamentals/attack"; // Uncapitalized
import Rotations from "./fundamentals/rotationsRecoveries"; // Uncapitalized
import SpeedDecision from "./fundamentals/speedDecisions"; // Uncapitalized
import EfficientChallenges from "./fundamentals/effectiveChallenges"; // Uncapitalized
import SoloQ from "./fundamentals/soloQ"; // Uncapitalized
import Mental from "./fundamentals/mental"; // Uncapitalized
import AdvancedTips from "./fundamentals/advancedTips"; // Uncapitalized
import Welcome from "./welcome";
// import Shooting from "./mechanics/shooting";  // Uncapitalized
import "../css/content.css";

interface ContentProps {
  OpenContent: string;
  isContentOpen: boolean;
}

const Content: React.FC<ContentProps> = ({ OpenContent, isContentOpen }) => {
  return (
    <>
      {isContentOpen ? (
        <div className="content-wrapper">
          {OpenContent === "" && <Welcome />}

          {/* Fundamentals */}
          {OpenContent === "defense" && <DefenseContent />}
          {OpenContent === "counterAttack" && <CounterAttack />}
          {OpenContent === "attack" && <Attack />}
          {OpenContent === "rotations" && <Rotations />}
          {OpenContent === "speedDecision" && <SpeedDecision />}
          {OpenContent === "efficientChallenges" && <EfficientChallenges />}
          {OpenContent === "soloQ" && <SoloQ />}
          {OpenContent === "mental" && <Mental />}
          {OpenContent === "advancedTips" && <AdvancedTips />}

          {/* Mechanics */}
          {OpenContent === "shooting" && <div>Shooting Mechanics Content</div>}
          {OpenContent === "dribbling" && (
            <div>Dribbling Mechanics Content</div>
          )}
          {OpenContent === "flicks" && <div>Flick Mechanics Content</div>}
          {OpenContent === "cutting" && (
            <div>Cutting & Control Mechanics Content</div>
          )}
          {OpenContent === "aerial" && <div>Aerial Mechanics Content</div>}
          {OpenContent === "resets" && <div>Reset Mechanics Content</div>}
          {OpenContent === "wall" && (
            <div>Wall & Ceiling Mechanics Content</div>
          )}
          {OpenContent === "defenseMechanics" && (
            <div>Defensive Mechanics Content</div>
          )}
        </div>
      ) : null}
    </>
  );
};

export default Content;
