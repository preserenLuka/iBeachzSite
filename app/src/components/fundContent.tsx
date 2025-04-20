import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import YouTubeEmbed from "../components/YouTubeEmbedProps";
import VideoWrapper from "../components/contentRightSide";
import VideoGallery from "./videoGallery";

// Data imports
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
import { div, p } from "motion/react-client";

interface ContentProps {
  isContentOpen: boolean;
}

const FundContent: React.FC<ContentProps> = ({ isContentOpen }) => {
  const { contentName } = useParams();

  const contentData: Record<string, contentObject> = {
    advancedTipsFundamental: advancedFundData,
    attackingFundamental: attackFundData,
    challengeFundamental: challengeFundData,
    counterAttackFundamental: counterAttackFundData,
    defenseFundamental: defenseFundData,
    mentalFundamental: mentalFundData,
    rotationFundamental: rotationFundData,
    soloQFundamental: soloQFundData,
    speedFundamental: speedFundData,
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
    <>
      <section className="topic">
        <div className="content">
          <h1 className="site-title">{currentContent.title}</h1>
          <p className="site-description">{currentContent.description}</p>
        </div>
        {currentContent.videoIds && currentContent.videoIds.length === 1 ? (
          <VideoWrapper vidId={currentContent.videoIds[0]} />
        ) : currentContent.videoIds && currentContent.videoIds.length > 1 ? (
          <VideoGallery videoIds={currentContent.videoIds} />
        ) : null}
      </section>
    </>
  );
};

export default FundContent;
