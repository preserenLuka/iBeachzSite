import React, { useEffect, useState } from "react";

import VideoGallery from "./videoGallery";

// Types
import { contentObject, RandomText, List, SingleTopic } from "../util/types";
// CSS
import "../css/singleContent.css";

interface ContentProps {
  isContentOpen: boolean;
  content: contentObject;
}
const isSingleTopic = (topic: any): topic is SingleTopic => {
  return (topic as SingleTopic).videoId !== undefined;
};

const singleContentComponent: React.FC<ContentProps> = ({ content }) => {
  const [topicsContent, setTopicsContent] = useState<Array<RandomText | List>>(
    []
  );

  useEffect(() => {
    if (content?.topics && "content" in content.topics) {
      setTopicsContent(content.topics.content);
    }
    console.log("content-------------:", content.topics);
  }, [content]);

  if (!content) {
    return <div className="wrapper">Content not found.</div>;
  }

  return (
    <>
      <section className="wrapper">
        <div className="content">
          <h1 className="site-title">{content.title}</h1>
          <p className="site-description">{content.description}</p>
          {isSingleTopic(content.topics) && content.topics.description && (
            <p className="site-sub-description">{content.topics.description}</p>
          )}
          {topicsContent.map((item, index) => {
            if ("text" in item) {
              return <p key={index}>{item.text}</p>;
            }

            if ("title" in item && "bulletPoints" in item) {
              return (
                <div key={index}>
                  <h3>{item.title}</h3>
                  <ul className="singleCul">
                    {item.bulletPoints &&
                      item.bulletPoints.map((bp, i) => {
                        // Check if the item is a BulletPoints or BPTitle
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
                    <p className="extra-text">{item.extraText}</p>
                  )}
                </div>
              );
            }

            return null; // Fallback
          })}
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

export default singleContentComponent;
