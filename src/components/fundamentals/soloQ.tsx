import React from "react";
import "../../css/contentstyle.css"; // Import the CSS file
import YouTubeEmbed from "../YouTubeEmbedProps"; // Import the YouTubeEmbed component

const CarryInSoloQ: React.FC = () => {
  return (
    <div className="content-section">
      <h2>Carry in Solo Q</h2>
      <p>
        In Solo Q, it's essential to focus on team coordination and always make
        it easier for your second man. Stick to the fundamentals and adapt as
        needed based on the situation.
      </p>

      <div className="role-section">
        <h3 className="role-header">Team Coordination:</h3>
        <ul className="role-list">
          <li>Always aim to make your second man’s job easier.</li>
          <li>
            If you face an awkward challenge and your teammate has a better
            opportunity, let them handle it.
          </li>
          <li>
            Work together to make things easier for both of you as a team.
          </li>
          <li>
            Cover your teammate’s weaknesses while enabling their strengths.
          </li>
          <li>
            If your teammate is unsure of what to do, it’s your responsibility
            to make the play easier for them.
          </li>
        </ul>
      </div>
      <YouTubeEmbed videoId="R96X67rdCZ8" />

      <div className="role-section">
        <h3 className="role-header">Adapting to Situations:</h3>
        <ul className="role-list">
          <li>
            Positionally, the key is to follow the fundamentals—there isn’t much
            need for drastic adaptation.
          </li>
          <li>
            However, you should adjust your mechanics based on your opponents'
            movements.
          </li>
          <li>
            For example: If an opponent pre-jumps when you're going for an air
            dribble, adjust by going back down instead of continuing with the
            air dribble.
          </li>
        </ul>
      </div>
      <YouTubeEmbed videoId="_lt5gk5TghA" />
    </div>
  );
};

export default CarryInSoloQ;
