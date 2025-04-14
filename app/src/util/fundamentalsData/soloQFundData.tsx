import { contentObject } from "../types";

const soloQFundData: contentObject = {
  title: "Carrying in Solo Q",
  key: "soloQFundemental",
  componentName: "soloQFundData",
  description:
    "In Solo Q, focus on team coordination and making the game easier for your second man. Stick to fundamentals, and adapt your mechanics based on the situation.",
  videoIds: [{ id: "R96X67rdCZ8" }, { id: "_lt5gk5TghA" }],
  topics: [
    {
      label: "Team Coordination",
      value: "soloTeamCoordination",
      videoTime: "(No timestamp)",
      description:
        "Carrying in Solo Q isn’t about doing everything alone — it’s about simplifying the game for your team and enabling better plays.",
      listOfLists: [
        {
          title: "Concepts:",
          bulletPoints: [
            { point: "Make your second man’s job easier." },
            {
              point:
                "If you're in an awkward spot and a teammate has a better opportunity—let them take it.",
            },
            { point: "Aim to simplify plays and enable team success." },
            {
              point: "Cover teammate weaknesses, support their strengths.",
            },
            {
              point:
                "If a teammate seems unsure, take initiative to simplify or enable the play.",
            },
          ],
        },
      ],
    },
    {
      label: "Adapting to Situations",
      value: "soloAdaptation",
      videoTime: "(No timestamp)",
      description:
        "You don’t need major strategic changes — just intelligent mechanical decisions based on how the game unfolds.",
      listOfLists: [
        {
          title: "Adaptation Guidelines:",
          bulletPoints: [
            {
              point:
                "Stick to positioning fundamentals; you don’t need big strategic shifts.",
            },
            {
              point:
                "Adjust your mechanical decisions based on opponents:\nE.g., if an opponent pre-jumps your air dribble, cancel it and take it down instead.",
            },
          ],
        },
      ],
    },
  ],
};
export default soloQFundData;
