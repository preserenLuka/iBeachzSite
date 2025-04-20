import React, { useState } from "react";
import YouTubeEmbed from "./YouTubeEmbedProps";
import "../css/tailwind.css"; // Or just your regular CSS file import
import { Ids } from "../util/types";

interface VideoGalleryProps {
  videoIds: Ids[];
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videoIds }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videoIds.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videoIds.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="vidGallery-wrapper">
      <YouTubeEmbed videoId={videoIds[currentIndex].id} />
      <div className="button-container">
        <button className="gallerybutton" onClick={handlePrev}>
          Previous
        </button>
        <button className="gallerybutton" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default VideoGallery;
