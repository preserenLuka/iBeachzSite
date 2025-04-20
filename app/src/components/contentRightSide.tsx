import React from "react";
import { FaAngleDoubleUp, FaAngleDoubleDown } from "react-icons/fa";
import YouTubeEmbed from "./YouTubeEmbedProps"; // Adjust path if needed

interface VideoWrapperProps {
  vidId: any;
  prevTopic?: any;
  nextTopic?: any;
}

const VideoWrapper: React.FC<VideoWrapperProps> = ({
  vidId,
  prevTopic,
  nextTopic,
}) => {
  console.log("VideoWrapper topic:", vidId);
  return (
    <div className="video-wrapper">
      <div className="controlbtn">
        <div className="btnwrap flex">
          {prevTopic && (
            <>
              <p>{prevTopic.label}</p>
              <FaAngleDoubleUp size={40} color="#e9e9e9" />
            </>
          )}
        </div>
      </div>

      {vidId?.id && <YouTubeEmbed videoId={vidId.id} />}

      <div className="controlbtn">
        <div className="btnwrap">
          {nextTopic && (
            <>
              <p>{nextTopic.label}</p>
              <FaAngleDoubleDown size={40} color="#e9e9e9" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoWrapper;
