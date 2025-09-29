import React from "react";
import { useParams } from "react-router";

// Components
import SingleContentComponent from "./singleContentComponent";
import MultiContentComponent from "./multiContentComponent";

// mech components
import shootingMechData from "../../util/mechData/shootingMechData";
import aerialMechData from "../../util/mechData/aerialMechData";
import defenseMechData from "../../util/mechData/defenseMechData";
import cuttingControlData from "../../util/mechData/cuttingControllData";
import flickMechData from "../../util/mechData/flickMechData";
import recoveryMechData from "../../util/mechData/recoveryMechData";
import resetMechData from "../../util/mechData/resetMechData";
import wallCeilingMechData from "../../util/mechData/wallCeilingMechData";

// fund components
import advancedFundData from "../../util/fundamentalsData/advancedFundData";
import attackFundData from "../../util/fundamentalsData/attackFundData";
import challengeFundData from "../../util/fundamentalsData/challengeFundData";
import counterAttackFundData from "../../util/fundamentalsData/counterAttackFundData";
import defenseFundData from "../../util/fundamentalsData/defenseFundData";
import mentalFundData from "../../util/fundamentalsData/mentalFundData";
import rotationFundData from "../../util/fundamentalsData/rotationFundData";
import soloQFundData from "../../util/fundamentalsData/soloQFundData";
import speedFundData from "../../util/fundamentalsData/speedFundData";

// Types
import { contentObject, MultiTopic } from "../../util/types";

// Type guard for MultiTopic
const isMultiTopic = (topics: any): topics is MultiTopic =>
  Array.isArray(topics);

interface ContentProps {
  isContentOpen: boolean;
}

const InformativeContent: React.FC<ContentProps> = ({ isContentOpen }) => {
  const { contentName } = useParams();

  const contentData: Record<string, contentObject> = {
    // Mechanics
    shootingMechanics: shootingMechData,
    aerialMechanics: aerialMechData,
    defenseMechanics: defenseMechData,
    cuttingControlMechanics: cuttingControlData,
    flickingMechanics: flickMechData,
    recoveryMechanics: recoveryMechData,
    resetMechanics: resetMechData,
    wallCeilingMechanics: wallCeilingMechData,

    // Fundamentals
    advancedTipsFundamental: advancedFundData,
    attackFundamental: attackFundData,
    challengeFundamental: challengeFundData,
    counterAttackFundamental: counterAttackFundData,
    defenseFundamental: defenseFundData,
    mentalFundamental: mentalFundData,
    rotationFundamental: rotationFundData,
    soloQFundamental: soloQFundData,
    speedFundamental: speedFundData,
  };

  const currentContent = contentName ? contentData[contentName] : undefined;

  if (!currentContent) {
    return <div>Content not found.</div>;
  }

  // Use type guard to decide which component to render
  if (isMultiTopic(currentContent.topics)) {
    return (
      <MultiContentComponent
        key="multi"
        isContentOpen={isContentOpen}
        content={currentContent}
      />
    );
  } else {
    return (
      <SingleContentComponent
        key="single"
        isContentOpen={isContentOpen}
        content={currentContent}
      />
    );
  }
};

export default InformativeContent;
