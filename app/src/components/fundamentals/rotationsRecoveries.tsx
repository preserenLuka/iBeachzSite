import React from "react";
import "../../css/contentstyle.css"; // Import the CSS file
import YouTubeEmbed from "../YouTubeEmbedProps"; // Import the YouTubeEmbed component

const RotationsRecoveriesContent: React.FC = () => {
  return (
    <div className="content-section">
      <h2>Rotations & Recoveries</h2>

      <div className="role-section">
        <h3 className="role-header">Selecting Boost Pads:</h3>
        <p>
          Effective pad management is crucial for maintaining speed and quick
          recoveries. Prioritize small boost pads to stay active while
          conserving large boost for offense.
        </p>
      </div>

      <div className="role-section">
        <h3 className="role-header">Recoveries:</h3>
        <ul className="role-list">
          <li>Recover quickly while using minimal boost.</li>
          <li>
            Save boost during recovery and defense to have more available for
            offense.
          </li>
          <li>Use boost freely if you're already close to supersonic speed.</li>
        </ul>
      </div>

      <div className="role-section">
        <h3 className="role-header">Rotations:</h3>

        <h4 className="role-subheader">1st Man:</h4>
        <ul className="role-list">
          <li>
            Harass opponents on the ground to disrupt their plays and support
            the 2nd man.
          </li>
          <li>
            If the opponent is in the air:
            <ul>
              <li>
                If fast enough, rotate behind the 2nd man to challenge from a
                better position.
              </li>
              <li>
                If not fast enough, challenge in the air yourself to make their
                job easier.
              </li>
            </ul>
          </li>
        </ul>

        <h4 className="role-subheader">2nd Man:</h4>
        <ul className="role-list">
          <li>
            If the 1st man is dealing with two opponents, cover his weak side
            (e.g., support for 50/50s).
          </li>
          <li>
            If he only has one defender to beat, cover his strong side to
            maintain pressure.
          </li>
          <li>
            Stay involved even with low boost—picking up small pads (24 boost is
            enough) keeps you in play.
          </li>
        </ul>
      </div>

      <YouTubeEmbed videoId="WlgNfzle_1s" />
    </div>
  );
};

export default RotationsRecoveriesContent;
