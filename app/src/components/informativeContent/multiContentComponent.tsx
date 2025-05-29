import React from "react";
import VideoGallery from "../ytEmbed/videoGallery";
// Types
import { contentObject, MultiTopic } from "../../util/types";
// CSS
import "../../css/multiContent.css";

interface ContentProps {
  isContentOpen: boolean;
  content: contentObject;
}

// Type guard to check if topics is MultiTopic
const isMultiTopic = (topics: any): topics is MultiTopic => {
  return Array.isArray(topics); // MultiTopic is an array of Topics
};

const MultiContentComponent: React.FC<ContentProps> = ({ content }) => {
  if (!content) {
    return <div className="multi-wrapper">Content not found.</div>;
  }

  // Check if topics is MultiTopic
  if (!isMultiTopic(content.topics)) {
    return <div className="multi-wrapper">Invalid topics format.</div>;
  }

  return (
    <div className="multi-wrapper">
      <div className="multi-topics-container">
        {content.topics.map((topic, index) => (
          <div key={index} className="multi-topic-section">
            <div className="multi-topic-content">
              <h2 className="multi-topic-title">{topic.title}</h2>

              {topic.description && (
                <p className="multi-topic-description">{topic.description}</p>
              )}

              {/* Map through the content of the topic */}
              {topic.content.map((item, idx) => {
                if ("text" in item) {
                  return (
                    <p key={idx} className="multi-topic-text">
                      {item.text}
                    </p>
                  );
                }

                if ("title" in item && "bulletPoints" in item) {
                  return (
                    <div key={idx} className="multi-content-section">
                      <h3 className="content-title">{item.title}</h3>
                      <ul className="singleCul">
                        {item.bulletPoints &&
                          item.bulletPoints.map((bp, i) => {
                            if ("point" in bp) {
                              return (
                                <li className="singleCli" key={i}>
                                  {bp.point}
                                </li>
                              );
                            } else if ("title" in bp) {
                              return (
                                <h4 className="singleh4" key={i}>
                                  {bp.title}
                                </h4>
                              );
                            }
                            return null; // Fallback for unexpected cases
                          })}
                      </ul>
                      {item.extraText && (
                        <p className="content-extra-text">{item.extraText}</p>
                      )}
                    </div>
                  );
                }

                return null; // Fallback
              })}
            </div>

            {/* Render video gallery */}
            <div className="multi-video-wrapper">
              {topic.videoId && topic.videoId.length > 0 ? (
                <VideoGallery videoIds={topic.videoId} />
              ) : (
                <p>No video available for this topic.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiContentComponent;
