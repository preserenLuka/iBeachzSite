import React, { useEffect } from "react";
import { useParams } from "react-router";
import YouTubeEmbed from "../components/YouTubeEmbedProps";

// Data imports
import shootingMechData from "../util/mechData/shootingMechData";
import aerialMechData from "../util/mechData/aerialMechData";
import defenseMechData from "../util/mechData/defenseMechData";
import cuttingControlData from "../util/mechData/cuttingControllData";
import flickMechData from "../util/mechData/flickMechData";
import recoveryMechData from "../util/mechData/recoveryMechData";
import resetMechData from "../util/mechData/resetMechData";
import wallCeilingMechData from "../util/mechData/wallCeilingMechData";
import advancedFundData from "../util/fundamentalsData/advancedFundData";
import attackFundData from "../util/fundamentalsData/attackFundData";
import challengeFundData from "../util/fundamentalsData/challengeFundData";
import counterAttackFundData from "../util/fundamentalsData/counterAttackFundData";
import defenseFundData from "../util/fundamentalsData/defenseFundData";
import mentalFundData from "../util/fundamentalsData/mentalFundData";
import rotationFundData from "../util/fundamentalsData/rotationFundData";
import soloQFundData from "../util/fundamentalsData/soloQFundData";
import speedFundData from "../util/fundamentalsData/speedFundData";

// Types
import { contentObject } from "../util/types";

// CSS
import "../css/content.css";
import { div } from "motion/react-client";

interface ContentProps {
  isContentOpen: boolean;
}

const Content: React.FC<ContentProps> = ({ isContentOpen }) => {
  const { contentName } = useParams();

  const contentData: Record<string, contentObject> = {
    shootingMechanics: shootingMechData,
    aerialMechanics: aerialMechData,
    defenseMechanics: defenseMechData,
    cuttingControlMechanics: cuttingControlData,
    flickingMechanics: flickMechData,
    recoveryMechanics: recoveryMechData,
    resetMechanics: resetMechData,
    wallCeilingMechanics: wallCeilingMechData,
    advancedTipsFundemental: advancedFundData,
    attackFundemental: attackFundData,
    challengeFundemental: challengeFundData,
    counterAttackFundemental: counterAttackFundData,
    defenseFundemental: defenseFundData,
    mentalFundemental: mentalFundData,
    rotationFundemental: rotationFundData,
    soloQFundemental: soloQFundData,
    speedFundemental: speedFundData,
  };
  useEffect(() => {
    console.log("Content updated:", contentName, currentContent);
  }, [contentName]);

  const currentContent = contentName ? contentData[contentName] : undefined;

  if (!currentContent) {
    return <div className="wrapper">Content not found.</div>;
  }

  return (
    <div className="wrapper">
      <h1>{currentContent.title}</h1>
      {currentContent.topics.map((label, videoTime, description) => (
        <></>
      ))}
    </div>
  );
};

export default Content;
