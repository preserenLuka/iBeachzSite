import React, { useEffect } from "react";
import { useParams } from "react-router";

// Components

// CSS

interface ContentProps {
  isContentOpen: boolean;
}

const Coaching: React.FC<ContentProps> = ({ isContentOpen }) => {
  const { contentName } = useParams();

  useEffect(() => {
    console.log("Content name:", contentName);
  }, [contentName]);

  const isRequst = contentName?.includes("Request");
  const isReview = contentName?.includes("Review");

  return (
    <div className="bg-gradiant w-full">
      {isRequst ? (
        <>test request</>
      ) : isReview ? (
        <>test review</>
      ) : (
        <>no content</>
      )}
    </div>
  );
};

export default Coaching;
