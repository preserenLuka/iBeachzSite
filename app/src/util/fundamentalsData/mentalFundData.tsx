import { contentObject } from "../types";

const mentalFundData: contentObject = {
  title: "Positive Mental",
  key: "mentalFundemental",
  componentName: "mentalFundData",
  description:
    "Mental resilience is huge in this game. It's okay to get tilted, but knowing how to manage it makes a big difference.",
  videoIds: [{ id: "C0EBfirnYIE" }],
  topics: [
    {
      label: "Managing Tilt",
      value: "managingTilt",
      videoTime: "(No timestamp)",
      description:
        "Tilt is natural, especially in a competitive setting. These strategies help you refocus and stay sharp.",
      listOfLists: [
        {
          title: "Practical Tips:",
          bulletPoints: [
            { point: "Tilt is normal—especially for competitive players." },
            {
              point:
                "Instead of focusing on teammates' mistakes, shift focus to the enemy’s errors.",
            },
            {
              point:
                "Watching opponent mistakes helps you find ways to win, not just dwell on how you're losing.",
            },
            { point: "Had a bad day? Avoid ranked to protect your mindset." },
            {
              point:
                "Still want to play? Try casual matches first—see how you feel before going into ranked.",
            },
          ],
        },
      ],
    },
    {
      label: "Improving Mental Game",
      value: "improvingMental",
      videoTime: "(No timestamp)",
      description: "Prevent mental burnout and build discipline over time.",
      listOfLists: [
        {
          title: "Guidelines:",
          bulletPoints: [
            {
              point:
                "Set a daily game limit—e.g., 15 games. Don't play past your tilt point (like game 6).",
            },
            {
              point: "Over time, this builds mental discipline and control.",
            },
            {
              point:
                "Got a teammate intentionally throwing? “Throw harder” to mentally reset—it’s about refreshing your mindset, not giving up.",
            },
          ],
        },
      ],
    },
    {
      label: "Having Fun",
      value: "mentalFun",
      videoTime: "(No timestamp)",
      description: "Fun is fuel for creativity and focus.",
      listOfLists: [
        {
          title: "Why It Matters:",
          bulletPoints: [
            {
              point:
                "Enjoying the game helps you stay creative and keeps your mindset fresh.",
            },
          ],
        },
      ],
    },
  ],
};

export default mentalFundData;
