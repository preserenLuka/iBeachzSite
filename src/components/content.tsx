import React, { useState, useEffect } from "react";
import YouTubeEmbed from "../components/YouTubeEmbedProps";

//   Mechs
import shootingMechData from "../util/mechData/shootingMechData";
import aerialMechData from "../util/mechData/aerialMechData";
import defenseMechData from "../util/mechData/defenseMechData";
import cuttingControlData from "../util/mechData/cuttingControllData";
import flickMechData from "../util/mechData/flickMechData";
import recoveryMechData from "../util/mechData/recoveryMechData";
import resetMechData from "../util/mechData/resetMechData";
import wallCeilingMechData from "../util/mechData/wallCeilingMechData";

//Fundementals
import advancedFundData from "../util/fundamentalsData/advancedFundData";
import attackFundData from "../util/fundamentalsData/attackFundData";
import challengeFundData from "../util/fundamentalsData/challengeFundData";
import counterAttackFundData from "../util/fundamentalsData/counterAttackFundData";
import defenseFundData from "../util/fundamentalsData/defenseFundData";
import mentalFundData from "../util/fundamentalsData/mentalFundData";
import rotationFundData from "../util/fundamentalsData/rotationFundData";
import soloQFundData from "../util/fundamentalsData/soloQFundData";
import speedFundData from "../util/fundamentalsData/speedFundData";

// CSS
import "../css/content.css";

// Types
import { contentObject, keyContentPairs } from "../util/types";

// Assuming contentObject and keyContentPairs types are defined in your types file

interface ContentProps {
  OpenContent: string;
  isContentOpen: boolean;
}

const Content: React.FC<ContentProps> = ({ OpenContent, isContentOpen }) => {
  const [keyPairs, setKeyPairs] = useState<keyContentPairs>({});
  const [dataToUse, setDataToUse] = useState<string>("");

  // Data mapping to access the correct data array based on component name
  const dataMap: { [key: string]: contentObject[] } = {
    shootingMechData,
    aerialMechData,
    defenseMechData,
    cuttingControlData,
    flickMechData,
    recoveryMechData,
    resetMechData,
    wallCeilingMechData,
    advancedFundData,
    attackFundData,
    challengeFundData,
    counterAttackFundData,
    defenseFundData,
    mentalFundData,
    rotationFundData,
    soloQFundData,
    speedFundData,
  };

  useEffect(() => {
    generateKeyContentPairs([
      shootingMechData,
      aerialMechData,
      defenseMechData,
      cuttingControlData,
      flickMechData,
      recoveryMechData,
      resetMechData,
      wallCeilingMechData,
      advancedFundData,
      attackFundData,
      challengeFundData,
      counterAttackFundData,
      defenseFundData,
      mentalFundData,
      rotationFundData,
      soloQFundData,
      speedFundData,
    ]);
  }, []);

  useEffect(() => {
    shownContent();
  }, [OpenContent]);

  const generateKeyContentPairs = (dataComponents: contentObject[][]) => {
    const newPairs: keyContentPairs = {};

    dataComponents.forEach((dataArray) => {
      dataArray.forEach((item) => {
        console.log("item", item);
        if (item.key) {
          newPairs[item.key] = item.componentName;
        }
      });
    });

    setKeyPairs((prev) => ({ ...prev, ...newPairs }));
  };

  const shownContent = () => {
    console.log("keyPairs", keyPairs);
    Object.entries(keyPairs).forEach(([key, componentName]) => {
      if (key === OpenContent) {
        console.log("componentName", componentName);
        setDataToUse(componentName); // Set the component name
      }
    });
  };

  // Determine which data to use based on dataToUse
  const currentData = dataMap[dataToUse] || [];

  return (
    <>
      <div className="wrapper">
        <div className="content-wrapper">
          <div className="content">
            {currentData.length > 0 &&
              currentData.map(({ title, key, description, topics }) => (
                <div key={key}>
                  <h1>{title}</h1>
                  {topics.map(({ label, listOfLists }) => (
                    <div key={label}>
                      <h2>{label}</h2>
                      {listOfLists.map(({ title }, index) => (
                        <div key={index}>
                          <h2>{title}</h2>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
        <div className="vid-wrapper">
          <div>a</div>
          <div>
            <YouTubeEmbed videoId="fsPlXbKgv3M" />
          </div>
          <div>c</div>
        </div>
      </div>
    </>
  );
};

export default Content;
