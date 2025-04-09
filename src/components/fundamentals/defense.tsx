import React from "react";
import "../../css/contentstyle.css"; // Import the CSS file
import YouTubeEmbed from "../YouTubeEmbedProps"; // Import the YouTubeEmbed component

const DefenseContent: React.FC = () => {
  return (
    <div className="content-section">
      <h2>Defense</h2>
      <p>
        When your team doesn't have possession, you're on defense—even if the
        opponent isn't fully in control of the ball.
      </p>

      <div className="role-section">
        <h3 className="role-header">1st Man:</h3>
        <ul className="role-list">
          <li>Make the 2nd man’s job easier.</li>
          <li>Apply pressure on the opponent handling the ball.</li>
          <li>
            Avoid overcommitting—don’t leave your 2nd man in a 1v2 situation.
          </li>
        </ul>
      </div>

      <div className="role-section">
        <h3 className="role-header">2nd Man:</h3>
        <ul className="role-list">
          <li>
            Create time for your 1st man to rotate and take your position.
          </li>
          <li>
            Use strategies like delaying, faking challenges, or executing solid
            low 50s for an advantage.
          </li>
          <li>Avoid challenging unless necessary.</li>
          <li>Cover your teammate’s weaker outcomes.</li>
          <li>
            Positioning on the backboard is often a strong defensive choice.
          </li>
        </ul>
      </div>
      <YouTubeEmbed videoId="4_4NYoMR8N0" />
    </div>
  );
};

export default DefenseContent;
