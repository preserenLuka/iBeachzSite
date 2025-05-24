import React, { useEffect } from "react";
import { useParams } from "react-router";

// Components
import Leaderboards from "./leaderboards";

// CSS

const InHouse: React.FC = () => {
  const { contentName } = useParams();

  useEffect(() => {
    console.log("Content name:", contentName);
  }, [contentName]);

  const isLeaderboars = contentName?.includes("Leaderboards");

  return <div>{isLeaderboars ? <Leaderboards /> : <>no content</>}</div>;
};

export default InHouse;
