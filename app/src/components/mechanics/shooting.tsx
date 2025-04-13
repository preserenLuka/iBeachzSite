import React from "react";
import "../../css/contentstyle.css"; // Import the CSS file

const ShootingMechanics: React.FC = () => {
  return (
    <div className="content-section">
      <h2>🚀 Shooting Mechanics in Rocket League</h2>
      <p>
        Welcome to the deep dive into advanced Rocket League shooting mechanics.
        Each mechanic here is designed to help you generate power, improve shot
        placement, and become a more threatening player on the field.
      </p>

      <div className="mechanic-section">
        <h3>🔫 Power Shooting (Basic) – 1:50</h3>
        <p>
          When to use: Anytime you need a powerful strike — offense, defense, or
          clears.
        </p>
        <h4>How to practice:</h4>
        <ul>
          <li>Line up front flips through the ball — not into it.</li>
          <li>
            Hit the ball into the sidewall repeatedly to build up power and
            consistency.
          </li>
          <li>
            Focus on pushing through the ball to maximize speed and control.
          </li>
          <li>
            Later, combine this with bounce reads and call out your shot before
            striking for intention training.
          </li>
        </ul>
      </div>

      <div className="mechanic-section">
        <h3>💥 Power Shooting (Advanced) – 4:30</h3>
        <p>
          What’s different: You use air roll (e.g., Air Roll Left) to lean away
          from the ball, then flip through it to generate massive power.
        </p>
        <h4>Key Points:</h4>
        <ul>
          <li>Lean out, then lean in with a diagonal flip.</li>
          <li>Practice hitting sidewalls/backboards at full power.</li>
          <li>
            Add intentional placement (e.g., top-left) once consistency builds.
          </li>
        </ul>
      </div>

      <div className="mechanic-section">
        <h3>🟠 Bounce Dribble (Power Shooting Out) – 28:50</h3>
        <p>Use this when:</p>
        <ul>
          <li>
            You want to bait a challenge or open up a better shooting angle.
          </li>
          <li>Great in 1v1 or if an opponent is shadowing closely.</li>
        </ul>
        <h4>Drill:</h4>
        <ul>
          <li>Bounce the ball consistently in a circular motion.</li>
          <li>Learn to hit it immediately after the bounce for max control.</li>
          <li>Shoot by side flipping or full volleying at the bounce peak.</li>
        </ul>
      </div>

      <div className="mechanic-section">
        <h3>🧱 Wall Pinch – 50:00</h3>
        <p>
          Why use: Quick, powerful clears when low on boost. Can also score from
          tight angles.
        </p>
        <h4>Steps:</h4>
        <ul>
          <li>Roll the ball up the wall.</li>
          <li>
            Jump into the wall and air roll so your wheels face the target.
          </li>
          <li>Flip into the ball right as you’re about to contact the wall.</li>
          <li>
            Be behind and slightly to the inside of the ball for best power.
          </li>
        </ul>
      </div>

      <div className="mechanic-section">
        <h3>🧲 Ground Pinch – 1:05:30</h3>
        <p>Use case: Fancy clear or finishing touch from a ceiling setup.</p>
        <h4>How to do it:</h4>
        <ul>
          <li>
            Set up like a ceiling shot, then fall down in sync with the ball.
          </li>
          <li>Dodge exactly as the ball hits the ground.</li>
          <li>
            Match the fall speed of the ball — don’t boost too much downward.
          </li>
        </ul>
      </div>

      <div className="mechanic-section">
        <h3>🟩 Ground Double Tap – 2:06:00</h3>
        <p>Rare, but flashy and effective:</p>
        <ul>
          <li>Requires bounce reads and perfect positioning.</li>
          <li>Combo of a bounce shot + recovery into the second shot.</li>
          <li>Often done with a pre-jump or fast aerial for follow-up.</li>
        </ul>
      </div>
    </div>
  );
};

export default ShootingMechanics;
