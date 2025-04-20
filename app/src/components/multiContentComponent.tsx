import React from "react";
import VideoGallery from "./videoGallery";

// Types
import { contentObject, MultiTopic, Topics } from "../util/types";

// CSS
import "../css/multiContent.css";

interface ContentProps {
  isContentOpen: boolean;
  content: contentObject;
}

// Type guard to check if topics is MultiTopic
const isMultiTopic = (topics: any): topics is MultiTopic => {
  return Array.isArray(topics); // MultiTopic is an array of Topics
};

const FundContent: React.FC<ContentProps> = ({ isContentOpen, content }) => {
  if (!content) {
    return <div className="multi-wrapper">Content not found.</div>;
  }

  return (
    <div className="multi-wrapper">
      {/* Sticky Title 
      <h1 className="multi-sticky-title">{content.title}</h1>
      */}
      {/* Other Sections: Topics */}
      <div className="multi-topics-container">
        {isMultiTopic(content.topics) ? (
          content.topics.map((topic: Topics, index) => (
            <div key={index} className="multi-topic-section">
              <div className="multi-topic-content">
                <h2 className="multi-topic-title">{topic.title}</h2>
                <p
                  className="multi-topic-description"
                  data-tooltip={topic.description}
                >
                  Hover for description
                </p>
              </div>
              <div className="multi-video-wrapper">
                {topic.videoId && topic.videoId.length > 0 ? (
                  <VideoGallery videoIds={topic.videoId} />
                ) : (
                  <p>No video available for this topic.</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No topics available.</p>
        )}
      </div>
    </div>
  );
};

export default FundContent;
