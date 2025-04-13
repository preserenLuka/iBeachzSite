import React from "react";
import "../../css/contentstyle.css"; // Import the CSS file
import YouTubeEmbed from "../YouTubeEmbedProps"; // Import the YouTubeEmbed component

const AdvancedTips: React.FC = () => {
  return (
    <div className="content-section">
      <h2>21 Advanced Tips</h2>
      <p>
        These advanced tips cover key areas like mentality, mechanics, and
        improvement strategies to elevate your gameplay.
      </p>

      <div className="role-section">
        <h3 className="role-header">Mentality Tips:</h3>
        <ul className="role-list">
          <li>
            Keep a Strong Mental: Don’t let mistakes get you down; focus on the
            next play.
          </li>
          <li>
            Avoid Autopilot: Improvement requires active effort; don’t rely on
            automatic actions.
          </li>
          <li>
            Embrace Ranked Play: Keep grinding ranked games even if you’re not
            performing well; it contributes to improvement.
          </li>
          <li>Avoid Desperation: Desperation can lead to losing more games.</li>
        </ul>
      </div>

      <div className="role-section">
        <h3 className="role-header">Mechanical Tips:</h3>
        <ul className="role-list">
          <li>
            Use Mechanics Wisely: Don’t force mechanics; use them when
            appropriate.
          </li>
          <li>
            Power Shooting: Focus on improving power shooting; it’s highly
            effective.
          </li>
          <li>
            First Touches: Work extensively on your first touches to enhance
            your mechanics.
          </li>
          <li>
            Utilize Environment: Get comfortable using walls and ceilings to
            your advantage.
          </li>
          <li>
            Boost Through Aerial Plays: Use boost effectively in the air to
            improve aerial plays.
          </li>
          <li>
            Fast Dribbling: Push the ball ahead of you in open space to maintain
            pace.
          </li>
        </ul>
      </div>

      <div className="role-section">
        <h3 className="role-header">Improvement Tips:</h3>
        <ul className="role-list">
          <li>
            Solo Queue for Fast Improvement: Playing solo Q is one of the
            quickest ways to improve.
          </li>
          <li>
            Respect Opponents: Understand and respect your opponents'
            intentions.
          </li>
          <li>
            Stay Active: If you’re not on the ball, make sure you’re doing
            something productive.
          </li>
          <li>
            Boost Management: Consider whether you have time to get boost, not
            just on defense.
          </li>
          <li>
            Effective Rotation: Rotate back ball side but stay out of the way to
            remain close to the play.
          </li>
          <li>
            Counter Attacking: Look for and maximize 2v1 opportunities to win
            games.
          </li>
          <li>
            Boost Usage: Use boost primarily on offense; you can defend and
            recover with minimal boost.
          </li>
          <li>
            Efficient Recovery: Save boost while maintaining speed during
            recoveries.
          </li>
          <li>
            Momentum Management: Value and maintain momentum; it helps with
            speed and boost conservation.
          </li>
          <li>
            Safe Second Man: Be reliable as a second man and position yourself
            to be back quickly after making a save.
          </li>
          <li>Intention: Clear intention is crucial for success.</li>
        </ul>
      </div>
      <YouTubeEmbed videoId="fsPlXbKgv3M" />
      <div className="role-section">
        <h3 className="role-header">More Detailed Tips:</h3>
        <ul className="role-list">
          <li>
            “Sometimes fundamentals will be broken because of the situation” –
            iBeachz.
          </li>
          <li>
            If you want to break the fundamentals, you must know them first.
          </li>
          <li>
            If there’s nothing you can do, move to where you think the next play
            will be or do something productive, like collecting boost pads or
            positioning yourself better.
          </li>
          <li>
            Have Intention: For example, say, “I’m going to go wall - ceiling -
            get reset - get 1 touch on ball - shoot.” Stick to that plan—don’t
            switch up mid-shot.
          </li>
          <li>
            Break mechanical skills down into small steps or drills to practice.
          </li>
          <li>
            Don’t Reset Your Shot if You Mess Up—Try to Follow It Up: Think
            about why you messed up and try to correct it on the next attempt.
          </li>
          <li>Adapt to your mistakes during training and freeplay.</li>
          <li>DO NOT QUICK CHAT TO A TEAMMATE WHEN THEY ARE ON THE BALL.</li>
        </ul>
      </div>

      <p>
        For a more detailed exploration of these advanced tips, check out the
        video below:
      </p>
    </div>
  );
};

export default AdvancedTips;
