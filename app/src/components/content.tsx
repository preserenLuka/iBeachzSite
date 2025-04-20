import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

// Components
import Welcome from "./welcome";
import InformativeContent from "./informativeContent";

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
    <div className="bg-gradiant w-full">
      {isFundamental || isMechanic ? (
        <InformativeContent isContentOpen={isContentOpen} />
      ) : (
        <Welcome />
      )}
    </div>
  );
};

export default Content;
