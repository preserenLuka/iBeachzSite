import React from "react";
import "../../css/contentstyle.css"; // Import the CSS file
import YouTubeEmbed from "../YouTubeEmbedProps"; // Import the YouTubeEmbed component

const SpeedDecisionMakingContent: React.FC = () => {
  return (
    <div className="content-section">
      <h2>Speed & Decision Making</h2>

      <div className="role-section">
        <h3 className="role-header">Speed:</h3>
        <ul className="role-list">
          <li>Maintain momentum—avoid unnecessary break checks.</li>
          <li>
            If you miss a boost pad, keep moving unless slowing down makes
            sense.
          </li>
          <li>
            To improve speed, focus on hitting the ball as quickly as possible
            based on your reads.
          </li>
          <li>
            Each time the ball bounces, react with purpose—freeplay is great for
            practicing this.
          </li>
          <li>
            Feeling out of control while moving fast is normal—it helps you
            develop control over time.
          </li>
          <li>
            A common mistake: players reach supersonic, stop briefly, then try
            to regain speed. Instead, maintain continuous movement.
          </li>
        </ul>
      </div>

      <div className="role-section">
        <h3 className="role-header">Decision Making:</h3>
        <ul className="role-list">
          <li>Trust your instincts—hesitation leads to mistakes.</li>
          <li>
            If you commit to a decision, follow through and learn from the
            outcome.
          </li>
          <li>
            Overthinking slows you down—making a correct decision too late is as
            bad as a wrong one.
          </li>
        </ul>
      </div>

      <YouTubeEmbed videoId="pBGFqL6RS7k" />
    </div>
  );
};

export default SpeedDecisionMakingContent;
