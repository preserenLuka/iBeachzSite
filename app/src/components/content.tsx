import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

// Components
import MechContent from "./mechContent";
import FundContent from "./fundContent";
import Welcome from "./welcome";

// CSS
import "../css/theme.css";
import "../css/tailwind.css";

interface ContentProps {
  isContentOpen: boolean;
}

const Content: React.FC<ContentProps> = ({ isContentOpen }) => {
  const { contentName } = useParams();

  useEffect(() => {
    console.log("Content name:", contentName);
  }, [contentName]);

  const isFundamental = contentName?.includes("Fundamental");
  const isMechanic = contentName?.includes("Mechanic");

  return (
    <div className="grow-1 flex flex-col bg-dark overflow-y-auto text-base">
      {isFundamental ? (
        <FundContent isContentOpen={isContentOpen} />
      ) : isMechanic ? (
        <MechContent isContentOpen={isContentOpen} />
      ) : (
        <Welcome />
      )}
    </div>
  );
};

export default Content;
