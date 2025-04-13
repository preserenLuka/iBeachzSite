import React from "react";
import "../css/welcome.css"; // Import the CSS file
import { FaDiscord, FaYoutube, FaTwitch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { div } from "motion/react-client";

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome-container">
      <div className="content-section">
        <h2>Welcome to Rocket League Fundamentals</h2>
        <p>
          Improve your Rocket League mechanics and game sense with in-depth
          lessons taught by <strong>iBeachz</strong>. Whether you're a beginner
          or an advanced player, you'll find valuable insights to level up your
          gameplay.
        </p>

        <p>
          Explore key aspects of the game, from positioning and rotation to
          advanced mechanics like air dribbles and flip resets.
        </p>

        <div className="role-section">
          <h3 className="role-header">Why Learn Here?</h3>
          <ul className="role-list">
            <li>Step-by-step breakdowns of core mechanics.</li>
            <li>Guidance from a high-level player & content creator.</li>
            <li>Access to a supportive community.</li>
          </ul>
        </div>

        <div className="role-section">
          <h3 className="role-header">Join the Community:</h3>
          <div className="social-links">
            <a
              href="https://www.youtube.com/channel/UCX1DOGA9YqtYud-ca1e10yg"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon youtube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.twitch.tv/ibeachz"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon twitch"
            >
              <FaTwitch />
            </a>
            <a
              href="https://discord.com/invite/8aVfucMymZ"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon discord"
            >
              <FaDiscord />
            </a>
          </div>
        </div>
        <button
          className="navigate-button"
          onClick={() => navigate("/content")}
        >
          Go to App
        </button>
      </div>
    </div>
  );
};

export default Welcome;
