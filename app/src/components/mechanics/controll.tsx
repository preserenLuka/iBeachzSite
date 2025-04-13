import React from "react";
import "../../css/contentstyle.css"; // Import the CSS file

const CuttingAndControlMechanics: React.FC = () => {
  return (
    <div className="content-section">
      <h2>🎮 Cutting & Control Mechanics</h2>
      <p>
        Want to stay ahead of your opponents? These mechanics give you sharper
        turns, faster recoveries, and cleaner transitions — all essential for
        higher-level play.
      </p>

      <div className="mechanic-section">
        <h3>🫳 Catching – 12:20</h3>
        <p>Why: Maintain possession when no one’s pressuring you.</p>
        <h4>How:</h4>
        <ul>
          <li>Roll the ball up a wall and let it bounce.</li>
          <li>
            Line up the ball’s landing with your car's center (use the shadow
            indicator).
          </li>
          <li>
            Match its speed and let it softly land on your car — no boost, no
            panic.
          </li>
        </ul>
        <p>
          Pro tip: Catching is the gateway to controlled dribbles, quick flicks,
          or 50/50 setups.
        </p>
      </div>

      <div className="mechanic-section">
        <h3>🌀 Power Slide Cuts – 35:55</h3>
        <p>What: Sudden, sharp direction change with the ball.</p>
        <p>When: To avoid a challenge or fake a race to boost.</p>
        <h4>Drill:</h4>
        <ul>
          <li>Roll the ball forward.</li>
          <li>Get in front of it.</li>
          <li>Power slide into a 90° or 45° cut, then keep going or flick.</li>
        </ul>
        <p>
          Use: When a defender is closing in from behind or the side — snap and
          redirect.
        </p>
      </div>

      <div className="mechanic-section">
        <h3>💨 Quick Cuts – 38:10</h3>
        <p>Variation of power slide cuts, but on your car.</p>
        <h4>How:</h4>
        <ul>
          <li>
            Dribble with the ball slightly on one side (e.g. right side for
            right cut).
          </li>
          <li>
            Use a quick 90° powerslide turn while accelerating into the
            direction.
          </li>
        </ul>
        <p>
          Why: Lets you keep the ball on your car while instantly changing
          lanes. Ideal for 1v1 jukes.
        </p>
      </div>

      <div className="mechanic-section">
        <h3>🦶 Wave Dash – 22:15</h3>
        <p>Purpose: Recover faster without boost.</p>
        <h4>How to perform:</h4>
        <ul>
          <li>Jump and cancel flip before landing.</li>
          <li>As your wheels touch, dodge into the ground.</li>
          <li>Your car “dashes” forward with momentum.</li>
        </ul>
        <p>Use it for:</p>
        <ul>
          <li>Speed after a challenge.</li>
          <li>Boost-efficient movement.</li>
          <li>Chaining into half-flips or rotations.</li>
        </ul>
      </div>

      <div className="mechanic-section">
        <h3>⚡ Speed Flip – 52:50</h3>
        <p>Essential for fast kickoffs and movement.</p>
        <p>
          What it is: A diagonally flipped, flip-canceled dash with perfect
          boost alignment.
        </p>
        <h4>How:</h4>
        <ul>
          <li>Diagonal flip (left or right).</li>
          <li>Immediately pull your stick down to cancel.</li>
          <li>Boost through for max speed.</li>
        </ul>
        <p>
          Note: Can be mirrored left/right. Focus on keeping the boost trail
          fully behind your car.
        </p>
      </div>

      <div className="mechanic-section">
        <h3>🧭 Directional Air Roll – 1:10:45</h3>
        <p>
          Why: Micro-adjust your aerial car control for shooting, saving, or
          resets.
        </p>
        <h4>Learning strategy:</h4>
        <ul>
          <li>Hold one air roll direction (e.g. Air Roll Right).</li>
          <li>Float mid-air and practice turning to face the four walls.</li>
          <li>Slowly add in movement, turns, and aim.</li>
        </ul>
        <p>
          Pro tip: Most of your control comes from opposite side stick inputs —
          mix in subtle micro-movements.
        </p>
      </div>

      <div className="mechanic-section">
        <h2>Dribbling Mechanics</h2>
        <p>
          Dribbling is all about possession and control. If you're comfortable
          with the ball on your car, you dictate the play. Here's a breakdown of
          the most effective dribbling techniques, drills, and how to apply them
          in-game.
        </p>

        <h3>🧠 Dribbling – 14:45</h3>
        <p>Why: Gives you control. Forces defenders to react.</p>
        <p>
          When to use: When you have space, want to outplay a defender, or set
          up a flick.
        </p>
        <h4>How to learn:</h4>
        <ul>
          <li>
            Roll the ball up a wall and catch it — don’t try to dribble right
            away.
          </li>
          <li>Focus on matching your car's speed to the ball’s speed.</li>
          <li>
            Once caught, practice staying under it and making quick adjustments.
          </li>
          <li>
            Learn how the ball controls you, then flip that — you control it.
          </li>
        </ul>
        <p>Tips:</p>
        <ul>
          <li>
            Don't just practice on a dead ball — always start with some
            movement.
          </li>
          <li>Use your earlier catch training as a foundation.</li>
          <li>
            Avoid constantly flicking in early stages — just stay on top of the
            ball.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CuttingAndControlMechanics;
