import React from "react";
import "../../css/contentstyle.css"; // Import the CSS file
import YouTubeEmbed from "../YouTubeEmbedProps"; // Import the YouTubeEmbed component

const CounterAttack: React.FC = () => {
  return (
    <div className="content-section">
      <h2>Counter Attacking</h2>
      <p>
        Counter-attacks are effective because opponents tend to overcommit on
        offense, leaving their defense vulnerable.
      </p>

      <p>
        To capitalize, transition as quickly as possible. Push the ball forward
        with pace, ensuring your first touch is controlled and sets up your next
        move.
      </p>

      <ul className="role-list">
        <li>If the last defender is too close, take the shot immediately.</li>
        <li>
          Clearing the ball high into the air can relieve pressure and create
          chances.
        </li>
        <li>
          If it's a 1v2 situation, consider demoing the last defender or passing
          to a teammate in a better position.
        </li>
        <li>
          Aim directly at the net rather than towards the walls or corners to
          keep pressure on.
        </li>
      </ul>

      <YouTubeEmbed videoId="F0KPMc9Cy-o" />
    </div>
  );
};

export default CounterAttack;
