import React from "react";
import "../../css/contentstyle.css"; // Import the CSS file
import YouTubeEmbed from "../YouTubeEmbedProps"; // Import the YouTubeEmbed component

const EfficientChallengesContent: React.FC = () => {
  return (
    <div className="content-section">
      <h2>Efficient Challenges</h2>
      <p>
        If you feel like your challenge was correct but still lost it, consider
        adjusting your approach or angle.
      </p>

      <div className="role-section">
        <h3 className="role-header">Dive Challenge:</h3>
        <ul className="role-list">
          <li>Only commit if you're confident it will benefit your team.</li>
          <li>Avoid overusing it—timing is key.</li>
        </ul>
      </div>

      <div className="role-section">
        <h3 className="role-header">Drive Challenge:</h3>
        <ul className="role-list">
          <li>Effective because it allows you to challenge without jumping.</li>
          <li>
            Ideal when you need to apply pressure but want to stay in the play.
          </li>
          <li>Your goal should be to challenge, then recover quickly.</li>
        </ul>
      </div>

      <div className="role-section">
        <h3 className="role-header">Fake Challenge:</h3>
        <ul className="role-list">
          <li>Use it when you are in a position of power.</li>
          <li>Always cover your net while fake challenging.</li>
          <li>
            Most effective when shadowing an opponent with strong ball control.
          </li>
          <li>
            If you force the opponent to react, you gain control of the play.
          </li>
          <li>
            Fake challenges can increase opponent panic, especially under
            pressure.
          </li>
        </ul>
      </div>

      <YouTubeEmbed videoId="HjHHbmNplt8" />
    </div>
  );
};

export default EfficientChallengesContent;
