import React from "react";
import "../../css/contentstyle.css"; // Import the CSS file

const WallCeilingMechanics: React.FC = () => {
  return (
    <div className="content-section">
      <h2>🧱 Wall & Ceiling Mechanics</h2>
      <p>
        Mastering walls and ceilings means you’re not limited by gravity. These
        mechanics give you more angles, more speed, and more options — whether
        you're attacking or defending.
      </p>

      <div className="mechanic-section">
        <h3>🧗 Wall Dash – 32:10</h3>
        <p>
          What it is: A dodge-based way to accelerate along the wall without
          using boost.
        </p>
        <h4>How to do it:</h4>
        <ul>
          <li>Jump slightly off the wall.</li>
          <li>As your back wheels touch the wall again, dodge forward.</li>
          <li>Repeat for speed.</li>
        </ul>
        <p>
          Pro tip: Only steer when dodging — don't hold your stick throughout.
        </p>
      </div>

      <div className="mechanic-section">
        <h3>🧨 Wall Pinch – 50:00 (also in Shooting)</h3>
        <p>When: Low boost clears or surprise goals.</p>
        <h4>How:</h4>
        <ul>
          <li>Roll the ball up the wall.</li>
          <li>Jump into the wall with a lean toward your target.</li>
          <li>Dodge into the ball just as you hit the wall.</li>
        </ul>
        <p>
          Key: Be slightly behind the ball to “pinch” it forward. Great for fast
          clears or unexpected shots.
        </p>
      </div>

      <div className="mechanic-section">
        <h3>🔊 Ceiling Pinch – 2:10:15</h3>
        <p>One of the highest-power mechanics in the game.</p>
        <h4>Execution:</h4>
        <ul>
          <li>Carry or air dribble the ball up.</li>
          <li>
            As it falls, match its speed and aim to pinch it between your car
            and the ceiling.
          </li>
          <li>Dodge into the ball right as it hits the ceiling.</li>
        </ul>
        <p>
          Timing is everything. You want to contact the ball and ceiling at the
          exact same time.
        </p>
      </div>

      <div className="mechanic-section">
        <h3>⏳ Ceiling Stall Reset – 2:15:30 (also in Resets)</h3>
        <p>Purpose: Delay your flip after a ceiling drop.</p>
        <h4>How to do it:</h4>
        <ul>
          <li>
            Air roll while falling off the ceiling to stall your movement.
          </li>
          <li>Touch all four wheels to reset your flip.</li>
          <li>Use the flip at the perfect moment — or fake it.</li>
        </ul>
      </div>

      <div className="mechanic-section">
        <h3>🎯 Side Wall Redirect – 1:51:25 (also Aerial/Shooting)</h3>
        <p>Use: Fast breaks, counterattack shots.</p>
        <h4>How:</h4>
        <ul>
          <li>Jump off the side wall.</li>
          <li>Boost at the ball and rotate mid-air.</li>
          <li>Redirect with a clean touch toward net.</li>
        </ul>
        <p>Requires great timing and spatial awareness.</p>
      </div>

      <div className="mechanic-section">
        <h3>🔁 Preflip Off Wall – 2:34:04 (also Aerial/Control)</h3>
        <p>When: You’re out of alignment but need to reach the ball fast.</p>
        <h4>How:</h4>
        <ul>
          <li>Drive off the wall slightly offset.</li>
          <li>Flip early in the direction of the ball.</li>
          <li>
            Hit with the front of your car mid-flip for a clean touch or shot.
          </li>
        </ul>
        <p>Pro tip: Pairs beautifully with resets and redirect plays.</p>
      </div>
    </div>
  );
};

export default WallCeilingMechanics;
