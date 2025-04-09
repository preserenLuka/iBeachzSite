import React from "react";
import "../../css/contentstyle.css"; // Import the CSS file
import YouTubeEmbed from "../YouTubeEmbedProps"; // Import the YouTubeEmbed component

const AttackContent: React.FC = () => {
  return (
    <div className="content-section">
      <h2>Attacking</h2>
      <p>
        When attacking, avoid shooting directly at goalkeepers—force them out of
        position or make them react awkwardly.
      </p>

      <p>
        If you decide to pass, don’t immediately chase your own pass. However,
        power shooting remains an essential skill.
      </p>

      <div className="role-section">
        <h3 className="role-header">1st Man:</h3>
        <ul className="role-list">
          <li>Focus on beating the opponent’s 1st man.</li>
          <li>Create difficult situations for their 2nd man.</li>
        </ul>
      </div>

      <div className="role-section">
        <h3 className="role-header">2nd Man:</h3>
        <ul className="role-list">
          <li>
            If your 1st man has two defenders to get past, cover his weak side
            (e.g., support for 50/50s or unpredictable outcomes).
          </li>
          <li>
            If he only has one defender to beat, cover his strong side to
            maintain offensive pressure.
          </li>
          <li>
            Stay close to the play, even with low boost—pad pickups (24 boost is
            enough) can keep you involved. Just don’t overcommit.
          </li>
        </ul>
      </div>

      <YouTubeEmbed videoId="McFf085CuXY" />
    </div>
  );
};

export default AttackContent;
