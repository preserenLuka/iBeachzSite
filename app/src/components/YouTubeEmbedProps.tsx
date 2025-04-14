import React from "react";
import "../css/YouTubeEmbed.css";

interface YouTubeEmbedProps {
  videoId: string;
  startTime?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => {
  return (
    <div className="responsive-iframe-container">
      <iframe
        className="responsive-iframe"
        width="1000"
        height="540"
        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
