import React from "react";

interface YouTubeEmbedProps {
  videoId: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => {
  return (
    <div>
      <style>
        {`
          .responsive-iframe-container {
            width: 720px;
            max-width: 100%;
            display: flex;
            justify-content: center;
            border-radius: 30px;
            overflow: hidden;
          }

          .responsive-iframe {
            width: 100%;
            max-width: 1280px; /* Adjust as needed */
            aspect-ratio: 16 / 9;
            border-radius: 30px; /* Apply directly to container */
          }

          /* Ensure the iframe gets clipped properly */
          .responsive-iframe-container iframe {
            border-radius: 30px;
          }
        `}
      </style>

      <div className="responsive-iframe-container">
        <iframe
          className="responsive-iframe"
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
