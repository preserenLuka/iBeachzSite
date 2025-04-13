import React from "react";
import "../../css/contentstyle.css"; // Import the CSS file

const DefensiveMechanics: React.FC = () => {
  return (
    <div className="content-section">
      <h2>🛡️ Defensive Mechanics</h2>
      <p>
        Defense in Rocket League isn’t just about blocking shots — it’s about
        recovering fast, reading pressure, and clearing with control. These
        mechanics will sharpen your defensive consistency.
      </p>

      <div className="mechanic-section">
        <h3>🔁 Half Flip – 7:10</h3>
        <p>Purpose: Quickly turn around when facing the wrong way.</p>
        <h4>How:</h4>
        <ul>
          <li>Backflip.</li>
          <li>Instantly flip cancel by holding forward on the stick.</li>
          <li>Add air roll (left/right) to rotate fully.</li>
        </ul>
        <p>
          Use: After overcommitting, losing a challenge, or missing a ball —
          gets you back into the play faster than a three-point turn.
        </p>
      </div>

      <div className="mechanic-section">
        <h3>🛡️ Backboard Defense – 1:21:15</h3>
        <p>Essential for blocking backboard passes and double taps.</p>
        <h4>How to train:</h4>
        <ul>
          <li>
            Sit on the backboard and practice jumping off to intercept aerials.
          </li>
          <li>
            Use air roll to position your car facing slightly upward or angled
            forward.
          </li>
        </ul>
        <h4>Tips:</h4>
        <ul>
          <li>Always rotate above the ball if it’s heading high.</li>
          <li>
            Don't commit off the backboard unless you're sure you’ll reach it.
          </li>
        </ul>
      </div>

      <div className="mechanic-section">
        <h3>
          📤 Corner & Wall Clears – (No timestamp, adding as per your request)
        </h3>
        <p>
          What: When defending under pressure, use the wall or corner to launch
          the ball out of danger.
        </p>
        <h4>Technique:</h4>
        <ul>
          <li>Let the ball roll up the corner or side wall.</li>
          <li>Jump or flip into it while aiming toward side or downfield.</li>
          <li>Use the side of your car for soft clears, or front for power.</li>
        </ul>
        <h4>Pro tips:</h4>
        <ul>
          <li>Avoid smashing it blindly — angle clears away from pressure.</li>
          <li>You can wave dash out of the wall for a quick follow-up.</li>
        </ul>
      </div>

      <div className="mechanic-section">
        <h3>🌊 Wave Dash – 22:15 (also in Control & Aerial)</h3>
        <p>
          Why for defense: Regain speed instantly after a save or recovery
          without wasting boost.
        </p>
        <h4>How to use:</h4>
        <ul>
          <li>
            After landing from a jump/save, dodge forward right as your back
            wheels hit.
          </li>
          <li>
            Combine it with a half flip or aerial recovery for lightning-fast
            repositioning.
          </li>
        </ul>
      </div>

      <div className="mechanic-section">
        <h3>⚡ Speed Flip – 52:50</h3>
        <p>Key use: Kickoffs and quick rotations.</p>
        <h4>Why:</h4>
        <ul>
          <li>
            Gets you to the ball or back post faster than any other method.
          </li>
          <li>More controlled than chain wavedashing or straight boosting.</li>
        </ul>
        <h4>Drill:</h4>
        <ul>
          <li>Diagonal flip.</li>
          <li>Immediately cancel with the stick down.</li>
          <li>Boost through — and keep your trail straight behind you.</li>
        </ul>
      </div>
    </div>
  );
};

export default DefensiveMechanics;
