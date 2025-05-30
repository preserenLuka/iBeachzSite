import React, { useState } from "react";
import YouTubeEmbed from "./YouTubeEmbedProps";

interface VideoGalleryProps {
  videoIds: string[];
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
      <YouTubeEmbed videoId={videoIds[currentIndex]} />
      {videoIds.length > 1 && ( // Conditionally render buttons if more than 1 video ID
        <div className="button-container">
          <button className="gallerybutton" onClick={handlePrev}>
            Previous
          </button>
          <button className="gallerybutton" onClick={handleNext}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
