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

// Icons
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

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
    advancedFundamentals: advancedFundData,
    attackingFundamentals: attackFundData,
    challengeFundamentals: challengeFundData,
    counterAttackFundamentals: counterAttackFundData,
    defenseFundamentals: defenseFundData,
    mentalFundamentals: mentalFundData,
    rotationFundamentals: rotationFundData,
    soloQFundamentals: soloQFundData,
    speedFundamentals: speedFundData,
  };

  const currentContent = contentName ? contentData[contentName] : undefined;

  useEffect(() => {
    console.log(
      "Content name:",
      contentName,
      "currentContent:",
      currentContent
    );
  }, [contentName]);

  if (!currentContent) {
    return <div className="wrapper">Content not found.</div>;
  }

  return (
    <div className="wrapper">
      <h1 className="site-title">{currentContent.title}</h1>
      <p className="site-description">{currentContent.description}</p>

      {currentContent.topics.map((topic, idx) => {
        const prevTopic = currentContent.topics[idx - 1];
        const nextTopic = currentContent.topics[idx + 1];

        return (
          <div key={idx} className="topic">
            <div className="content">
              <h2>{topic.label}</h2>
              <p className="topic-description">{topic.description}</p>

              {topic.listOfLists.map((list, listIdx) => (
                <div key={listIdx} className="bullet-list">
                  <h3>{list.title}</h3>
                  <ul>
                    {list.bulletPoints && list.bulletPoints.length > 0 && (
                      <ul>
                        {list.bulletPoints.map((bulletPoint, index) => (
                          <li key={index}>{bulletPoint.point}</li>
                        ))}
                      </ul>
                    )}
                  </ul>
                </div>
              ))}
            </div>

            <div className="video-wrapper">
              {/* Up Button with Previous Topic Label */}
              <div className="controlbtn">
                <div className="btnwrap flex">
                  {prevTopic && (
                    <>
                      <p>{prevTopic.label}</p>
                      <FaAngleDoubleUp size={40} color="#e9e9e9" />
                    </>
                  )}
                </div>
              </div>

              {topic.videoId && (
                <YouTubeEmbed
                  videoId={topic.videoId}
                  startTime={topic.videoTime}
                />
              )}

              {/* Down Button with Next Topic Label */}
              <div className="controlbtn">
                <div className="btnwrap">
                  {nextTopic && (
                    <>
                      <p>{nextTopic.label}</p>
                      <FaAngleDoubleDown size={40} color="#e9e9e9" />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
