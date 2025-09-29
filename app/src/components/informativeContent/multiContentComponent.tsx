import React, { useRef, useState, useEffect } from "react";
import VideoGallery from "../ytEmbed/videoGallery";
import { contentObject, MultiTopic } from "../../util/types";
import "./css/multiContent.css";

interface ContentProps {
  isContentOpen: boolean;
  content: contentObject;
}

const isMultiTopic = (topics: any): topics is MultiTopic =>
  Array.isArray(topics);

const MultiContentComponent: React.FC<ContentProps> = ({ content }) => {
  console.log("MULTICONTENT: Render", content);

  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isScrolling = useRef(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  if (!content) {
    console.log("MULTICONTENT: No content");
    return <div className="multi-wrapper">Content not found.</div>;
  }
  if (!isMultiTopic(content.topics)) {
    console.log("MULTICONTENT: Invalid topics format", content.topics);
    return <div className="multi-wrapper">Invalid topics format.</div>;
  }
  const topics = content.topics;
  console.log("MULTICONTENT: topics", topics);

  // Wheel handler for section-by-section scroll
  useEffect(() => {
    const handleWheel = (e: Event) => {
      const event = e as WheelEvent;
      event.preventDefault();
      if (isScrolling.current) return;
      if (event.deltaY > 0 && currentSection < topics.length - 1) {
        isScrolling.current = true;
        setCurrentSection((prev) => {
          const next = Math.min(topics.length - 1, prev + 1);
          sectionRefs.current[next]?.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => (isScrolling.current = false), 700);
          return next;
        });
      } else if (event.deltaY < 0 && currentSection > 0) {
        isScrolling.current = true;
        setCurrentSection((prev) => {
          const next = Math.max(0, prev - 1);
          sectionRefs.current[next]?.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => (isScrolling.current = false), 650);
          return next;
        });
      }
    };

    const wrapper = wrapperRef.current;
    wrapper?.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      wrapper?.removeEventListener("wheel", handleWheel);
    };
  }, [currentSection, topics.length]);

  return (
    <div className="multi-wrapper" ref={wrapperRef}>
      <div className="multi-topics-container">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="multi-topic-section"
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
          >
            <div className="multi-topic-content">
              <h2 className="multi-topic-title">{topic.title}</h2>
              {topic.description && (
                <p className="multi-topic-description">{topic.description}</p>
              )}
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
                            return null;
                          })}
                      </ul>
                      {item.extraText && (
                        <p className="content-extra-text">{item.extraText}</p>
                      )}
                    </div>
                  );
                }
                return null;
              })}
            </div>
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
