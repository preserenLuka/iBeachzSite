import React, { useEffect, useState } from "react";

import YouTubeEmbed from "../components/YouTubeEmbedProps";
import VideoWrapper from "../components/contentRightSide";
import VideoGallery from "./videoGallery";

// Types
import { contentObject } from "../util/types";
import { SingleTopic } from "../util/types";
// CSS
import "../css/singleContent.css";

interface ContentProps {
  isContentOpen: boolean;
  content: contentObject;
}
const isSingleTopic = (topic: any): topic is SingleTopic => {
  return (topic as SingleTopic).videoId !== undefined;
};

const FundContent: React.FC<ContentProps> = ({ isContentOpen, content }) => {
  if (!content) {
    return <div className="wrapper">Content not found.</div>;
  }

  return (
    <>
      <section className="wrapper">
        <div className="content">
          <h1 className="site-title">{content.title}</h1>
          <p className="site-description">{content.description}</p>
        </div>
        <div className="video-wrapper">
          {isSingleTopic(content.topics) && content.topics.videoId ? (
            <VideoGallery videoIds={content.topics.videoId} />
          ) : (
            <p>No video available for this topic.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default FundContent;
