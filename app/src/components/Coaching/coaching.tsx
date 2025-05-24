import React, { useEffect } from "react";
import { useParams } from "react-router";

// Components
import CoachingRequest from "./coachingRequest";
import CoachingReviews from "./coachingReviews";

// CSS

const Coaching: React.FC = () => {
  const { contentName } = useParams();

  useEffect(() => {
    console.log("Content name:", contentName);
  }, [contentName]);

  const isRequst = contentName?.includes("Request");
  const isReview = contentName?.includes("Review");

  return (
    <div>
      {isRequst ? (
        <CoachingRequest />
      ) : isReview ? (
        <CoachingReviews />
      ) : (
        <>no content</>
      )}
    </div>
  );
};

export default Coaching;
