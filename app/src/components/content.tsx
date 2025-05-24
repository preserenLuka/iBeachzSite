import React, { useEffect } from "react";
import { useParams } from "react-router";

// Components
import Welcome from "./welcome";
import InformativeContent from "./informativeContent";
import Coaching from "./Coaching/coaching";
import InHouse from "./inHouse/inHouse";
import Notes from "./Notes/notes";

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
  const isCoaching = contentName?.includes("Coaching");
  const isInHouse = contentName?.includes("InHouse");
  const isNotes = contentName?.includes("Notes");

  return (
    <div className="bg-gradiant w-full">
      {isFundamental || isMechanic ? (
        <InformativeContent isContentOpen={isContentOpen} />
      ) : isCoaching ? (
        <Coaching />
      ) : isInHouse ? (
        <InHouse />
      ) : isNotes ? (
        <Notes />
      ) : (
        <Welcome />
      )}
    </div>
  );
};

export default Content;
