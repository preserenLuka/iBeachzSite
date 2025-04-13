import React from "react";
import "../../css/contentstyle.css"; // Import the CSS file

const FlickMechanics: React.FC = () => {
  return (
    <div className="content-section">
      <h2>⚡ Flick Mechanics in Rocket League</h2>
      <p>
        Flicks let you convert possession into instant offense. The better your
        flick variety, the harder it is for defenders to predict or block your
        plays.
      </p>

      <div className="mechanic-section">
        <h3>👟 Front Flip Flick – 17:45</h3>
        <p>Use: Gain momentum and get a quick shot with minimal boost.</p>
        <p>When: Low on boost or need a fast, simple finish.</p>
        <h4>How to do it:</h4>
        <ul>
          <li>Dribble the ball just above your car’s nose.</li>
          <li>Jump, wait until your car dips forward, then front flip.</li>
          <li>
            Timing is everything — flick right as your car hits ~45° forward
            angle.
          </li>
        </ul>
        <p>
          Tip: The flick is most effective when the ball is slightly forward,
          not dead center.
        </p>
      </div>

      <div className="mechanic-section">
        <h3>👞 Back Flip Flick – 20:00</h3>
        <p>
          Use: Great for lob passes, surprise shots, or avoiding early
          challenges.
        </p>
        <p>Best in: 1v1 or 2v2 if your teammate is waiting mid.</p>
        <h4>How to do it:</h4>
        <ul>
          <li>Let the ball rest on the back side of your car.</li>
          <li>Jump, let your car angle backward (~45° up), then backflip.</li>
          <li>Add boost during the flick to extend the lob.</li>
        </ul>
      </div>

      <div className="mechanic-section">
        <h3>➗ Diagonal Flick – 25:15</h3>
        <p>
          Use: Adds both height and power. Great for shooting over defenders or
          creating backboard reads.
        </p>
        <h4>Execution:</h4>
        <ul>
          <li>Put the ball just slightly to one side on your car.</li>
          <li>
            Lean diagonally opposite to the side it's on (e.g. ball right → lean
            left).
          </li>
          <li>Hold that lean, then flick diagonally.</li>
        </ul>
        <p>Tips:</p>
        <ul>
          <li>Back of your car = more height.</li>
          <li>Front = more power.</li>
        </ul>
      </div>

      <div className="mechanic-section">
        <h3>🔁 Reverse 45 Flick – 40:30</h3>
        <p>One of the most powerful flicks in the game.</p>
        <p>When: To shoot with power when shadowed or being pressured.</p>
        <h4>How to do it:</h4>
        <ul>
          <li>Place ball on the right side (for a right-side flick).</li>
          <li>
            Air roll 45° away from the ball while slightly tilting your nose
            down.
          </li>
          <li>Diagonal backflip toward the ball.</li>
        </ul>
        <p>
          Note: Requires the ball to be perfectly settled. Timing + lean are
          crucial.
        </p>
      </div>

      <div className="mechanic-section">
        <h3>🧠 Musty Flick – 46:00</h3>
        <p>Use: Surprise defenders with high-arcing, powerful backflips.</p>
        <h4>How:</h4>
        <ul>
          <li>
            Ball should be falling off the front of your car — not centered.
          </li>
          <li>Lean your car back until it's beyond vertical.</li>
          <li>Backflip while boosting during the flick for more height.</li>
        </ul>
      </div>

      <div className="mechanic-section">
        <h3>⌛ Delayed Musty – 1:56:00</h3>
        <p>Style shot with big reward if timed right.</p>
        <h4>Technique:</h4>
        <ul>
          <li>
            Similar to regular musty, but hold the setup longer before the flip.
          </li>
          <li>Delays add mind games — defenders often pre-jump too early.</li>
        </ul>
      </div>

      <div className="mechanic-section">
        <h3>🌪️ Tornado Flick – 2:03:00</h3>
        <p>Highly mechanical and flashy.</p>
        <h4>How it works:</h4>
        <ul>
          <li>Dribble the ball.</li>
          <li>Air roll in a full spin (tornado motion).</li>
          <li>
            As your car rotates under the ball, flick in a chosen direction.
          </li>
        </ul>
        <p>
          Use when: You want to disorient defenders with unusual angles or
          impress your team (or TikTok).
        </p>
      </div>
    </div>
  );
};

export default FlickMechanics;
