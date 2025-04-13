import React from "react";
import "../../css/contentstyle.css"; // Import the CSS file

const AerialMechanics: React.FC = () => {
  return (
    <div className="content-section">
      <h2>✈️ Aerial Mechanics</h2>
      <p>
        The air is where Rocket League truly becomes a different game. Mastering
        aerials means becoming a threat anywhere on the field — whether you're
        striking, passing, or faking.
      </p>

      <div className="mechanic-section">
        <h3>🛫 Aerial (with Power) – 9:00</h3>
        <p>
          When: Beating opponents to the ball, countering clears, or
          quick-shotting a rebound.
        </p>
        <h4>How: (Fast aerial)</h4>
        <ol>
          <li>Jump once (preferably hold jump).</li>
          <li>
            Immediately boost while holding your stick back slightly to lift
            off.
          </li>
          <li>Let go of your stick and jump again while maintaining boost.</li>
          <li>
            Keep boosting and push through the ball using the nose of your car.
            Push through the ball using the front of your car.
          </li>
        </ol>
        <p>Tips:</p>
        <ul>
          <li>
            Hit the ball while you're going up and the ball is falling —
            generates the most power.
          </li>
          <li>Lean slightly forward at the point of contact to add force.</li>
        </ul>
      </div>

      <div className="mechanic-section">
        <h3>🧊 Air Dribbling – Core mechanic, no exact timestamp</h3>
        <p>Why: Maintains control and pressure mid-air.</p>
        <p>
          When: In 1s or 2s when you have time and want to force a reaction.
        </p>
        <h4>How to learn:</h4>
        <ol>
          <li>Roll the ball up the wall.</li>
          <li>Jump off and hit it slightly upward on the first touch.</li>
          <li>
            Stay close and feather boost while guiding the ball with soft
            touches.
          </li>
          <li>
            Try to keep the ball in your “bubble” — just ahead of the car.
          </li>
        </ol>
        <p>Tips:</p>
        <ul>
          <li>Don’t overboost — less is more.</li>
          <li>Use small side adjustments (air roll helps a lot).</li>
          <li>
            Practice in freeplay first — training packs often set it up too
            clean.
          </li>
        </ul>
      </div>

      <div className="mechanic-section">
        <h3>💥 Air Dribble Bumps – 1:45:00</h3>
        <p>Toxic? Maybe. Effective? Absolutely.</p>
        <p>When: One defender in net.</p>
        <h4>How:</h4>
        <ol>
          <li>Set up a normal air dribble.</li>
          <li>
            Instead of flicking or shooting, fly the ball into the goal area.
          </li>
          <li>
            Bump the goalie instead of hitting the ball — let the ball drift in.
          </li>
        </ol>
        <p>
          Pro tip: Use this when the defender respects your air dribble —
          they'll wait on the goal line. You remove them instead.
        </p>
      </div>

      <div className="mechanic-section">
        <h3>🕊️ Ground to Air Dribble Off Bounce/Roll – 1:29:15</h3>
        <p>
          When to use: Transition into aerial play when the ball is rolling or
          bouncing in front of you.
        </p>
        <h4>Drill:</h4>
        <ol>
          <li>Roll or bounce the ball toward yourself.</li>
          <li>Match its speed and gently lift it up with a diagonal touch.</li>
          <li>
            Immediately jump and boost into the ball to begin your air dribble.
          </li>
          <li>Focus on soft, controlled touches.</li>
        </ol>
        <p>Training Focus:</p>
        <ul>
          <li>Start with bounce setups — they’re more forgiving.</li>
          <li>
            Prioritize balance and ball height before worrying about scoring.
          </li>
        </ul>
      </div>

      <div className="mechanic-section">
        <h3>🛫 Ground to Air Dribble (from carry) – 1:47:10</h3>
        <p>Higher-skill version: Turning a dribble into an aerial threat.</p>
        <h4>Steps:</h4>
        <ol>
          <li>Dribble the ball on your car and build momentum.</li>
          <li>Pop it slightly forward and jump underneath.</li>
          <li>Feather boost to stay close and make small air touches.</li>
        </ol>
        <p>Common use:</p>
        <ul>
          <li>Beat early challenges from defenders.</li>
          <li>
            Transition smoothly into a flip reset, musty, or ceiling play if
            you're confident.
          </li>
        </ul>
      </div>

      <div className="mechanic-section">
        <h3>🎯 Side Wall Redirect – 1:51:25</h3>
        <p>When to use: Fast counterattacks or quick redirects off passes.</p>
        <h4>How to perform:</h4>
        <ol>
          <li>Drive up the side wall at an angle.</li>
          <li>Jump off, align with the ball in mid-air.</li>
          <li>Air roll to adjust and hit it cleanly toward net.</li>
        </ol>
        <p>
          Requires good read and fast reaction timing. Looks flashy, but very
          practical in fast-paced games.
        </p>
      </div>

      <div className="mechanic-section">
        <h3>🔄 Off-Wall Double Taps – 1:15:30</h3>
        <p>(Also under Shooting)</p>
        <p>Why: Beat backboard defenders or score from unexpected angles.</p>
        <h4>Steps:</h4>
        <ol>
          <li>Pop the ball off the wall with control.</li>
          <li>Follow close behind.</li>
          <li>Hit the backboard first, then redirect on the rebound.</li>
        </ol>
        <p>Key: The first touch must create space between you and the ball.</p>
      </div>
    </div>
  );
};

export default AerialMechanics;
