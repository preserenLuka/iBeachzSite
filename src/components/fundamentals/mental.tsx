import React from "react";
import "../../css/contentstyle.css"; // Import the CSS file
import YouTubeEmbed from "../YouTubeEmbedProps"; // Import the YouTubeEmbed component

const PositiveMental: React.FC = () => {
  return (
    <div className="content-section">
      <h2>Positive Mental</h2>
      <p>
        Mental resilience is crucial in this game. It's okay to tilt, but
        learning how to handle it can make all the difference.
      </p>

      <div className="role-section">
        <h3 className="role-header">Managing Tilt:</h3>
        <ul className="role-list">
          <li>
            Tilt is an emotion, and it’s completely normal, especially for
            competitive players.
          </li>
          <li>
            Instead of focusing on your teammates' mistakes, try to notice the
            enemy’s errors.
          </li>
          <li>
            Focusing on your opponent's mistakes helps you look for ways to win,
            while focusing on your teammates' mistakes will only highlight how
            you're losing.
          </li>
          <li>
            If you’ve had a rough day, avoid ranked games to protect your mental
            state.
          </li>
          <li>
            If you’re still eager to play, try casual matches first and gauge
            how you feel before jumping into ranked.
          </li>
        </ul>
      </div>

      <div className="role-section">
        <h3 className="role-header">Improving Mental Game:</h3>
        <ul className="role-list">
          <li>
            Set a daily game limit. For instance, if you plan to play 15 games,
            ensure you don’t tilt by game 6.
          </li>
          <li>
            Over time, setting limits and sticking to them will help you manage
            your mental game.
          </li>
          <li>
            If a teammate is intentionally throwing, you can "throw" the game
            twice as hard as a mental reset. This can help refresh your mindset.
          </li>
        </ul>
      </div>

      <div className="role-section">
        <h3 className="role-header">Having Fun:</h3>
        <ul className="role-list">
          <li>
            Above all, try to have fun. This will help you stay creative and
            enjoy the game more.
          </li>
        </ul>
      </div>

      <YouTubeEmbed videoId="C0EBfirnYIE" />
    </div>
  );
};

export default PositiveMental;
